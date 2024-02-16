//Denne oppretter en tom array med navn "biletter" Dette arrayet vil bli brukt til å
//lagre billettobjekter når de blir opprettet ved hjelp av funksjonen "LagreBilletter()".
let biletter= [];

//Denne henter verdien som er skrevet inn i inputfeltene med ID-ene antall, fornavn, etternavn,
//telefonnr og epost og lagrer dem i tilsvarende variabler.
    function LagreBilletter() {
        let film = document.getElementById("bestilling").value;
        let antall = document.getElementById("antall").value;
        let fornavn = document.getElementById("fornavn").value;
        let etternavn = document.getElementById("etternavn").value;
        let telefonnr = document.getElementById("telefonnr").value;
        let epost = document.getElementById("epost").value;


        nullstillFeilmeldinger();

        // Validering av inputverdier
        let antallValid = antall !== "" && !isNaN(antall) && antall > 0;
        let fornavnValid = fornavn !== "" && isNaN(fornavn);
        let etternavnValid = etternavn !== "" && isNaN(etternavn);
        let telefonnrValid = telefonnr !== "" && !isNaN(telefonnr) && telefonnr.length === 8;
        let epostPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; //Brukte dette formatet ved hjelp av denne linken: https://emaillistvalidation.com/blog/email-validation-in-javascript-using-regular-expressions-the-ultimate-guide/
        let epostValid = epostPattern.test(epost);

        // Denne delen av koden sjekker om all input fra brukeren er gyldig.
        // Hvis alt er i orden, legges billetten til i en liste, og billettinformasjonen vises.
        if (antallValid && fornavnValid && etternavnValid && telefonnrValid && epostValid) {
            leggTiliArray(); //Leger til billettene i arrayet "biletter"
            visBilletter(); //Viser billettene
            tomBokser(); //Tømmer inputfeltene

            /*
            Hvis minst ett av valideringskriteriene ikke er oppfylt, betyr det at det er feil i inputen. I så fall utføres følgende handlinger:
            For hvert av de feilaktige feltene, settes tilsvarende feilmelding basert på hvilken type feil det er.
            For eksempel, hvis antall-feltet er tomt, vil en melding om å fylle inn antall vises,
            eller hvis antall er ugyldig (ikke et tall eller no sånt), vil en melding om ugyldig antall vises.
            Dette gjentas for de andre feltene: fornavn, etternavn, telefonnr, og epost.
            */
        }
        else {
            if (antall === "") {
                document.getElementById("feilmelding_antall").innerText = "Fyll inn antallet";
            }
            else if (antallValid === false) {
                document.getElementById("feilmelding_antall").innerText = "Ugyldig antall";
            }
            else {
                document.getElementById("feilmelding_antall").innerText = "";
            }
            if (fornavn === "") {
                document.getElementById("feilmelding_fornavn").innerText = "Fyll inn fornavnet";
            }
            else if (fornavnValid === false){
                document.getElementById("feilmelding_fornavn").innerText = "Ugyldig fornavn";
            }
            else {
                document.getElementById("feilmelding_fornavn").innerText = "";
            }
            if (etternavn === "") {
                document.getElementById("feilmelding_etternavn").innerText = "Fyll inn etternavnet";
            }

            else if (etternavnValid === false){
                    document.getElementById("feilmelding_etternavn").innerText = "Ugyldig etternavn";
            }
            else {
                document.getElementById("feilmelding_etternavn").innerText = "";
            }
            if (telefonnr === "") {
                document.getElementById("feilmelding_telefonnr").innerText = "Fyll inn telefonnummeret";
            }
            else if (telefonnrValid === false) {
                document.getElementById("feilmelding_telefonnr").innerText = "Ugyldig telefonnummer";
            }
            else {
                document.getElementById("feilmelding_telefonnr").innerText = "";
            }
            if (epost === "") {
                document.getElementById("feilmelding_epost").innerText = "Fyll inn eposten";
            }
            else if (epostValid!==true){
                    document.getElementById("feilmelding_epost").innerText = "Ugyldig epost";
            }
            else {
                document.getElementById("feilmelding_epost").innerText = "";
            }

        }
        function nullstillFeilmeldinger() {
            //Feilmeldingene tilbakestilles når alle feltene er fyllt inn
            document.getElementById("feilmelding_epost").innerText = "";
            document.getElementById("feilmelding_epost").style.color = "red";
            document.getElementById("feilmelding_telefonnr").innerText = "";
            document.getElementById("feilmelding_telefonnr").style.color = "red";
            document.getElementById("feilmelding_etternavn").innerText = "";
            document.getElementById("feilmelding_etternavn").style.color = "red";
            document.getElementById("feilmelding_fornavn").innerText = "";
            document.getElementById("feilmelding_fornavn").style.color = "red";
            document.getElementById("feilmelding_antall").innerText = "";
            document.getElementById("feilmelding_antall").style.color = "red";
        }


        /*Denne tar informasjon fra inputfeltene altså antall, fornavn, etternavn, telefonnr og epost,
        organiserer dem i objektet "billett" og legger dette objektet til i arrayet "biletter"
        */
        function leggTiliArray() {
            let billett = {
                film: film,
                antall: antall,
                fornavn: fornavn,
                etternavn: etternavn,
                telefonnr: telefonnr,
                epost: epost,
            }
            biletter.push(billett);
        }

        //Inputfeltene tømmes når du kjører programmet i en nettleser, siden feltene skal blankes
            function tomBokser() {
            document.getElementById("bestilling").value = "velg film her";
            document.getElementById("antall").value = "";
            document.getElementById("fornavn").value = "";
            document.getElementById("etternavn").value = "";
            document.getElementById("telefonnr").value = "";
            document.getElementById("epost").value = "";
        }

        /*Denne funksjonen gjør det mulig å vise billettinformasjonen på nettsiden ved hjelp av en for løkke
        Oppretter en tom streng kalt "utskrift". Deretter går en gjennom hvert billettobjekt i biletter-arrayen ved hjelp av en forløkke
        For hvert billettobjekt legger den til informasjonen om billetten i utskrift-strengen ved hjelp av en sammensetning av tekst og billettens attributter
        (film, antall, fornavn, etternavn, telefonnr, epost).
        */
        function visBilletter() {
            let utskrift = "";
            for (let i = 0; i < biletter.length; i++) {
                let billett = biletter[i];
                utskrift += "Film: "+ billett.film+ " Antall: " + billett.antall + " Fornavn: " +billett.fornavn + " Etternavn: " +billett.etternavn+ " Telefonnr: " +billett.telefonnr + " Epost: " +billett.epost;
            }
            document.getElementById("array_utskrift").innerHTML = utskrift;
        }
    }

    /*Denne funksjonen gjør det mulig å slette arrayet eller tømme arrayet
     Med andre ord, alle elementene i arrayet blir fjernet, og arrayet blir satt til å være tomt.
     document.getElementById("array_utskrift").innerHTML = ""; tømmer innholdet i HTML-elementet med ID-en "array_utskrift".
     Denne delen av koden sørger for at alt innhold som vises i dette elementet fjernes.
    */
    function SlettBilletter() {
       biletter.splice(0,biletter.length);
       document.getElementById("array_utskrift").innerHTML = "";
   }
