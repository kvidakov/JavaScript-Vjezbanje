/**
 * Created by KARLO on 15.9.2016..
aaaaaaaaaaaaaa
 */
var ProvjeriBrojZnakova = function (Vrijednost)
{
    this.Unos = Vrijednost;
    if (Vrijednost.value.length != 4)
    {
        alert("Niste unjeli 4 znamenke za id, pokusajte ponovo!");
        this.Unos.focus();
    }
};

var brojac = 0;
var NoviProizvod = [];

var Proizvod = function (idProizvoda, Cijena, Kolicina)
{
    function DodajProizvod(idProizvoda,Cijena,Kolicina)
    {
        this.ID = idProizvoda;
        this.cijena = Cijena;
        this.kolicina = Kolicina;
    }
    NoviProizvod[brojac] = new DodajProizvod(idProizvoda, Cijena, Kolicina);
    alert("Proizvod uspjesno dodan");
    brojac++;
    document.getElementById("idProizvoda").value = "";
    document.getElementById("Cijena").value = "";
    document.getElementById("Kolicina").value = "";
};

var Skladiste = function (ID)
{
    var Pronadeno = false;
    for (var i = 0; i < NoviProizvod.length;i++)
    {
        if (ID == NoviProizvod[i].ID)
        {
            var Suma = NoviProizvod[i].cijena * NoviProizvod[i].kolicina;
            document.getElementById("IspisCijena").value = NoviProizvod[i].cijena;
            document.getElementById("IspisKolicina").value = NoviProizvod[i].kolicina;
            document.getElementById("IspisSuma").value = Suma;
            Pronadeno = true;
        }
    }
    if (Pronadeno == false)
    {
        var Poruka = "Ne postoji proizvod sa tim ID-em";
        alert(Poruka);
    }
};

var SakrijOtkrij = function (SakrijGa)
{
    var SakrijIzracun = function (SakrijGa)
    {
        var divZaUpisProizvoda = document.getElementById("divZaUpisProizvoda");
        var divZaIspisProizvoda = document.getElementById("divZaIspisProizvoda");
        this.Gumb =  SakrijGa;
        switch (this.Gumb.id)
        {
            case "GumbZaUnos":  divZaIspisProizvoda.style.display = "none";
                                divZaUpisProizvoda.style.display = "block";
                                break;
            case "GumbZaPrikaz": divZaUpisProizvoda.style.display = "none";
                                divZaIspisProizvoda.style.display = "block";
                                break;
        }
    };
    SakrijIzracun(SakrijGa);
};



