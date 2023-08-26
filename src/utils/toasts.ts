import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

export const resetPasswordEmailSent = () =>
  toast({
    title: "Email di reset inviata con successo!",
    description: "Controlla anche lo spam se necessario!",
    duration: 5000,
    isClosable: true,
    status: "success",
    position: "top",
  });

export const serverError = () =>
  toast({
    title: "Errore coi nostri server",
    description:
      "Riprovare più tardi; se il problema persiste, contattare il supporto tramite il link a fondo pagina",
    duration: 5000,
    isClosable: true,
    status: "error",
    position: "top",
  });

export const fieldsNotValid = () =>
  toast({
    title: "Campi di inserimento non validi",
    description: "Riprovare inserendo accuratamente le informazioni",
    duration: 5000,
    isClosable: true,
    status: "warning",
    position: "top",
  });

export const emailNotValid = () =>
  toast({
    title: "Email non valida",
    duration: 5000,
    isClosable: true,
    status: "warning",
    position: "top",
  });

export const passwordLengthError = () => {
  toast({
    title: "La password deve contenere almeno 6 caratteri",
    duration: 5000,
    isClosable: true,
    status: "warning",
    position: "top",
  });
};

export const accountAlreadyExisting = () =>
  toast({
    title: "Account già esistente con questa email",
    duration: 5000,
    isClosable: true,
    status: "error",
    position: "top",
  });

export const wrongPassword = () =>
  toast({
    title: "Password errata",
    duration: 5000,
    isClosable: true,
    status: "error",
    position: "top",
  });

export const accountNotExisting = () =>
  toast({
    title: "Account non esistente con questa email",
    duration: 5000,
    isClosable: true,
    status: "error",
    position: "top",
  });

export const verificationSent = () =>
  toast({
    title: "Account Creato! Inviata l'email di verifica",
    description:
      "Conferma tramite il link che ti abbiamo inviato per email per attivare il tuo account",
    duration: 5000,
    isClosable: true,
    status: "success",
    position: "top"
  });

export const loggedIn = () =>
  toast({
    title: "Login effettuato con successo!",
    duration: 5000,
    isClosable: true,
    status: "success",
    position: "top"
  });

export const phoneNotValid = () =>
  toast({
    title: "Numero di telefono non valido",
    status: "error",
    duration: 5000,
    isClosable: true,
  });

export const accountDeleted = () =>
  toast({
    title: "Account eliminato con successo",
    status: "success",
    position: "top",
    duration: 5000,
    isClosable: true,
  });

export const cannotSelectPastDate = () =>
  toast({
    title:
      "Il giorno selezionato è precedente a quello odierno",
    status: "warning",
    duration: 5000,
    isClosable: true,
  });

export const cannotSelectAlreadyBookedShift = () =>
  toast({
    title:
      "Orario già prenotato",
    status: "warning",
    duration: 5000,
    isClosable: true,
  });

export const cannotSelectAlreadyBookedCombo = () =>
  toast({
    title:
      "Combinazione di Orario e Data già prenotata per questo campo.",
    status: "warning",
    duration: 5000,
    isClosable: true,
  });

export const bookingAborted = () =>
  toast({
    title:
      "Errore con il server, prenotazione cancellata",
    status: "error",
    duration: 5000,
    isClosable: true,
  });

export const fieldDateError = () =>
  toast({
    title:
      "Errore, la combinazione di data selezionata e orario del campo selezionato non coincidono",
    description: "Se l'errore persiste, contattare il supporto a fondo pagina.\nGrazie",
    status: "error",
    duration: 5000,
    isClosable: true,
  });

export const cannotSelectExtremeFutureDate = () =>
  toast({
    title:
      "Il giorno selezionato è troppo futuro a quello odierno",
    status: "warning",
    duration: 5000,
    isClosable: true,
  });

export const pleaseSelectShift = () =>
  toast({
    title: "Per favore, seleziona un orario",
    status: "warning",
    duration: 5000,
    isClosable: true,
  });

export const eventAddedToGCal = () =>
  toast({
    title:
      "Tutto fatto! L'evento è stato anche aggiunto sul tuo account Google Calendar!",
    status: "success",
    duration: 5000,
    isClosable: true,
  });

export const bookingDeleted = () =>
  toast({
    title: "La prenotazione è stata cancellata con successo.",
    status: "info",
    duration: 5000,
    isClosable: true,
  });

export const recentLoginRequired = () =>
  toast({
    title: "Impossibile eliminare l'account",
    description:
      "Esegui il logout e riautenticati, dopodichè riprova ad eseguire l'eliminazione",
    status: "error",
    duration: 5000,
    isClosable: true,
  });

export const internetIssues = () =>
  toast({
    title: "Errore di connessione",
    description:
      "Verifica se siete correttamente connessi a internet e riprovate",
    status: "error",
    duration: 5000,
    isClosable: true,
  });

export const cannotDeleteBookingTresholdPassed = () =>
  toast({
    title: "Non puoi cancellare una prenotazione dal sito se non massimo 8 ore prima dell'orario stabilito",
    description:
      "Le prenotazioni che superano questo limite devono essere cancellate tramite WhatsApp: +39 351 67 30 628",
    status: "warning",
    duration: 5000,
    isClosable: true,
  });
