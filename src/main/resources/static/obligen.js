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


        //Dersom feltene ikke er fyllt inn, så får du opp en feilmelding. Hvis for eksempel antallet
        // er skrevet inn i inputboksen, så får du ikke lenger feilmelding på antallet, men på de andre får du
        //dersom de andre er også tomme.

        nullstillFeilmeldinger();

        // Validering av inputverdier
        let antallValid = antall !== "" && !isNaN(antall) && antall > 0;
        let fornavnValid = fornavn !== "" && isNaN(fornavn);
        let etternavnValid = etternavn !== "" && isNaN(etternavn);
        let telefonnrValid = telefonnr !== "" && !isNaN(telefonnr) && telefonnr.length === 8;
        let epostPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; //Brukte dette formatet ved hjelp av denne linken: https://emaillistvalidation.com/blog/email-validation-in-javascript-using-regular-expressions-the-ultimate-guide/
        let epostValid = epostPattern.test(epost);

        // Hvis all input er gyldig, legg til billett og vis dem
        if (antallValid && fornavnValid && etternavnValid && telefonnrValid && epostValid) {
            leggTiliArray();
            visBilletter();
            tomBokser();

        }



        else {
            if (antall === "") {
                document.getElementById("feilmelding_antall").innerText = "Fyll inn antallet";
            } else if (antallValid === false) {
                document.getElementById("feilmelding_antall").innerText = "Ugyldig antall";
            } else {
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
            } else if (telefonnrValid === false) {
                document.getElementById("feilmelding_telefonnr").innerText = "Ugyldig telefonnummer";
            } else {
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


        //Denne tar informasjon fra inputfeltene altså antall, fornavn, etternavn, telefonnr og epost,
        //organiserer dem i objektet "bilett" og legger dette objektet til i arrayet "biletter"
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
        function visBilletter() {
            let utskrift = "";
            for (let i = 0; i < biletter.length; i++) {
                let billett = biletter[i];
                utskrift += `Film: ${billett.film}, Antall: ${billett.antall}, Fornavn: ${billett.fornavn}, Etternavn: ${billett.etternavn}, Telefonnr: ${billett.telefonnr}, Epost: ${billett.epost}<br>`;
            }
            document.getElementById("array_utskrift").innerHTML = utskrift;
        }

        function SlettBilletter() {
            biletter = [];
            visBilletter();
        }
    }