var weryfikacja_pesel = 0;

document.getElementById("pesel").addEventListener("change", function(){
    verifypesel();
});

document.getElementById("subButton").addEventListener("click", function(){

    if((document.forms.formularz.imie.value.length > 0 && document.forms.formularz.imie.value.length <= 20) && (document.forms.formularz.nazwisko.value.length > 0 && document.forms.formularz.nazwisko.value.length <= 30) && (document.forms.formularz.pesel.value.length > 0 && weryfikacja_pesel != 0) && document.forms.formularz.data.value.length != 0)
    {
        alert("Dane zostały wprowadzone poprawnie");
    }
    else
    {
        alert("Niestety, niektóre pola formularza wymagają Twojej reakcji");
    }

});

function verifypesel()
{
    var nrPesel = document.getElementById('pesel').value;

    if(nrPesel.length > 0)
    {
        var peselInt = new Array;
        var wagi = [1,3,7,9,1,3,7,9,1,3,1];
        var rok, miesiac, dzien, i, dwie_ostatnie_cyfry_roku, pierwsza_cyfra_miesiaca;
        var suma = 0;
    
        if(nrPesel.length == 11)
        {
    
            // ODCZYT CYFR Z PESELU
            for(i = 0; i < 11; i++)
            {
                peselInt[i] = parseInt(nrPesel.substring(i,i+1));
            }
    
            // SPRAWDZENIE SUMY KONTROLNEJ
            for(i = 0; i < 11; i++)
            {
                suma += wagi[i]*peselInt[i];
            }
    
            if((suma % 10) == 0)
            {
                // POBIERANIE DANYCH O ROKU, MIESIACU i DNIU URODZIN
                dwie_ostatnie_cyfry_roku = peselInt[0] + "" + peselInt[1];
    
                if(peselInt[2] == 0 || peselInt[2] == 1)
                {
                    rok = "19" + dwie_ostatnie_cyfry_roku;
                }
                else if(peselInt[2] == 2 || peselInt[2] == 3)
                {
                    rok = "20" + dwie_ostatnie_cyfry_roku;
                }
                else if(peselInt[2] == 4 || peselInt[2] == 5)
                {
                    rok = "21" + dwie_ostatnie_cyfry_roku;
                }
                else if(peselInt[2] == 6 || peselInt[2] == 7)
                {
                    rok = "22" + dwie_ostatnie_cyfry_roku;
                }
                else
                {
                    rok = "18" + dwie_ostatnie_cyfry_roku;
                }
    
                if(peselInt[2] % 2 == 0)
                {
                    pierwsza_cyfra_miesiaca = 0;
                }
                else
                {
                    pierwsza_cyfra_miesiaca = 1;
                }
    
                miesiac = pierwsza_cyfra_miesiaca + "" + peselInt[3];
    
                dzien = peselInt[4] + "" + peselInt[5];
    
                document.getElementById('data_urodzenia').value = rok + "-" + miesiac + "-" + dzien;

                weryfikacja_pesel = 1;
            }
            else
            {
                alert("Niepoprawny PESEL");
            }
        }
        else
        {
            alert("Niepoprawna długość PESEL");
        }
    }
}