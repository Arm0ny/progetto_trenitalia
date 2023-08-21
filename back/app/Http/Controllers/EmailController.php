<?php

namespace App\Http\Controllers;

use App\Models\Email;
use App\Models\Token;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Env;
use Illuminate\Support\Str;
use SendinBlue\Client\Api\TransactionalEmailsApi;
use SendinBlue\Client\Configuration;
use SendinBlue\Client\ApiClient;
use SendinBlue\Client\Model\SendSmtpEmail;

class EmailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return Email::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Email::findOrFalil($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function checkEmail(Request $request)
    {
        $email = $request->input('email');

        // Controlla se l'email è presente nel database
        $emailRecord = Email::where('email', $email)->first();

        if ($emailRecord) {
            // Se l'email è già presente nel database e associata a un token, ritorna il token
            return $this->sendEmail($request);

        } else {
            // Se l'email non è presente nel database, crea un nuovo token e associarlo all'email
            $tokenValue = Str::random(16);

            try {
                $token = new Token(['token' => $tokenValue]);
                $token->save();

                $newEmail = new Email(['email' => $email, 'token_id' => $token->id]);
                $newEmail->save();
                return $this->sendEmail($request);
            }catch (\Exception $e){
                return response()->json(['error' => 'Si è verificato un errore durante la creazione della email e del token'], 500);
            }
        }
    }

    public function sendEmail(Request $request)
    {
        $email = $request->input('email');

        // Trova il token nel database in base all'email
        $token = Email::where('email', $email)->first()->token;

        // Inserisci qui la tua chiave API di Sendinblue
        $apiKey = Env::get("API_KEY");

        // Configura l'API client di Sendinblue
        $config = Configuration::getDefaultConfiguration()->setApiKey('api-key', $apiKey);
        $apiInstance = new TransactionalEmailsApi(new Client(), $config);

        // Prepara i dati dell'email
        $redeemUrl = Env::get('APP_URL') . "/code?token=".$token->token;
        $htmlContent = '<a href="' . $redeemUrl . '">LINK AL CODICE SCONTO</a> TOKEN=' . $token->token;

        $emailData = new SendSmtpEmail([
            'subject' => 'Ecco il tuo codice sconto trenitalia',
            'htmlContent' => $htmlContent,
            'sender' => ['name' => Env::get("MAIL_FROM_NAME"), 'email' => Env::get("MAIL_FROM_ADDRESS")],
            'to' => [['email' => $email]],
        ]);

        try {
            // Invia l'email utilizzando le API di Sendinblue
            $result = $apiInstance->sendTransacEmail($emailData);

            // Ritorna una risposta positiva al frontend (ad esempio, una risposta JSON vuota)
            return response()->json([], 200);
        } catch (\Exception $e) {
            // Gestisci eventuali errori nell'invio dell'email
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
