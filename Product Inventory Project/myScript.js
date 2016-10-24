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
var VecPostoji = false;

var Proizvod = function (idProizvoda, Cijena, Kolicina)
{
    function DodajProizvod(idProizvoda,Cijena,Kolicina)
    {
        if (brojac > 0)
        {
            for (var i = 0; i < NoviProizvod.length;i++)
            {
                if (idProizvoda == NoviProizvod[i].ID)
                {
                    VecPostoji = true;
                    NoviProizvod[i].kolicina = +Kolicina;
                    NoviProizvod[i].cijena = +Cijena;
                    Prepravi(idProizvoda,Kolicina);
                }
            }
        }

        if (VecPostoji === false && idProizvoda !== "" && Cijena !== "" && Kolicina !== "")
        {
            this.ID = idProizvoda;
            this.cijena = Cijena;
            this.kolicina = Kolicina;
            alert("Proizvod uspjesno dodan");
            Kvadratici(idProizvoda, Kolicina);
        }
        else if (VecPostoji == true)
        {

        }
        else
        {
            alert("Niste unjeli sve potrebne parametre ili ste unjeli ID koji se vec koristi!");
        }
    }
    NoviProizvod[brojac] = new DodajProizvod(idProizvoda, Cijena, Kolicina);

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
        var divZaUpisProizvoda, divZaIspisProizvoda, divZaPromjenuProizvoda;
        divZaUpisProizvoda = document.getElementById("divZaUpisProizvoda");
        divZaIspisProizvoda = document.getElementById("divZaIspisProizvoda");
        divZaPromjenuProizvoda = document.getElementById("divZaPromjenuProizvoda");
        this.Gumb =  SakrijGa;
        switch (this.Gumb.id)
        {
            case "GumbZaUnos":  divZaIspisProizvoda.style.display = "none";
                                divZaPromjenuProizvoda.style.display = "none";
                                divZaUpisProizvoda.style.display = "block";
                                break;
            case "GumbZaPrikaz": divZaUpisProizvoda.style.display = "none";
                                divZaPromjenuProizvoda.style.display = "none";
                                divZaIspisProizvoda.style.display = "block";
                                break;
            case "GumbZaPromjenu":  divZaUpisProizvoda.style.display = "none";
                                    divZaIspisProizvoda.style.display = "none";
                                    divZaPromjenuProizvoda.style.display = "block";
        }
    };
    SakrijIzracun(SakrijGa);
};

var Kvadratici = function (idProizvoda, Kolicina)
{
    var Kontenjer, Div, P1, P2, P3, P4, Tekst1, Tekst2, Tekst3, Tekst4;
    Kontenjer = document.getElementById("container");
    Div = document.createElement("div");
    Div.id = idProizvoda;
    P1 = document.createElement("p");
    P2 = document.createElement("p");
    P3 = document.createElement("p");
    P4 = document.createElement("p");
    Tekst1 = document.createTextNode("ID PROIZVODA: ");
    Tekst2 = document.createTextNode(idProizvoda);
    Tekst3 = document.createTextNode("KOLICINA PROIZVODA: ");
    Tekst4 = document.createTextNode(Kolicina);
    P1.appendChild(Tekst1);
    P2.appendChild(Tekst2);
    P3.appendChild(Tekst3);
    P4.appendChild(Tekst4);
    P4.id = "kol" + idProizvoda;
    Div.className += "Divovi";
    Div.appendChild(P1).appendChild(P2).appendChild(P3).appendChild(P4);
    Kontenjer.appendChild(Div);
    Div.id = idProizvoda;
    Div.style.webkitAnimation = "fadeIn 2s";
    var DragDrop = function ()
    {
        Kontenjer.onload = addListeners();
        var offX;
        var offY;

        function addListeners(){
            Div.addEventListener('mousedown', mouseDown, false);
            Kontenjer.addEventListener('mouseup', mouseUp, false);

        }

        function mouseUp()
        {
            Kontenjer.removeEventListener('mousemove', divMove, true);
        }

        function mouseDown(e){

            offY= e.clientY-parseInt(Div.offsetTop);
            offX= e.clientX-parseInt(Div.offsetLeft);
            Kontenjer.addEventListener('mousemove', divMove, true);
        }

        function divMove(e){

            Div.style.position = 'absolute';
            Div.style.top = (e.clientY-offY) + 'px';
            Div.style.left = (e.clientX-offX) + 'px';
        }
    }
    Div.addEventListener("mousedown", DragDrop);
};


var Prepravi = function (idProvjeriProizvod, CijenaIliKolicina, Operator, NovaVrijednost)
{
    var Kontenjer = document.getElementById("container"), broj;
    function ProvjeriID(idProvjeriProizvod)
    {
        var pronaden = false;
        for (var i = 0; i < NoviProizvod.length;i++)
        {
            if (idProvjeriProizvod === NoviProizvod[i].ID)
            {
                pronaden = true;
                switch (CijenaIliKolicina)
                {
                    case "Cijena": switch (Operator)
                    {
                        case "Plus":    broj = NoviProizvod[i].cijena;
                                        parseInt(broj);
                                        broj = +broj + parseInt(NovaVrijednost);
                                        NoviProizvod[i].cijena = +broj;
                            break;
                        case "Minus":   if (NovaVrijednost >= NoviProizvod[i].cijena)
                                            NoviProizvod[i].cijena = 0;
                                        else
                                            broj = NoviProizvod[i].cijena;
                                            parseInt(broj);
                                            broj = +broj - parseInt(NovaVrijednost);
                                            NoviProizvod[i].cijena = +broj;
                                            break;
                    }
                    case "Kolicina": switch (Operator)
                    {
                        case "Plus":    broj = NoviProizvod[i].kolicina;
                                        parseInt(broj);
                                        broj = +broj + parseInt(NovaVrijednost);
                                        NoviProizvod[i].kolicina = +broj;
                                        break;
                        case "Minus":   if (NovaVrijednost >= NoviProizvod[i].kolicina)
                                            NoviProizvod[i].kolicina = 0;
                                        else
                                            broj = NoviProizvod[i].kolicina;
                                            parseInt(broj);
                                            broj = +broj - parseInt(NovaVrijednost);
                                            NoviProizvod[i].kolicina = +broj;
                                            break;
                    }
                }
                for (var j = 1; j <= Kontenjer.childElementCount; j++)
                {
                    if (idProvjeriProizvod === Kontenjer.childNodes[j].id)
                    {
                        document.getElementById("kol" + idProvjeriProizvod).innerText = NoviProizvod[i].kolicina;
                        Kontenjer.childNodes[j].kolicina = NoviProizvod[i].kolicina;
                    }
                }
                alert("Uspjesno ste azurirali stanje!");
            }
        }
        if (pronaden == false)
        {
            alert("Unjeli ste nepostojeci ID!");
            return;
        }
    }
    ProvjeriID(idProvjeriProizvod);
};
function PostaviInputKNiliKom(CijenaIliKolicina)
{
    var knilikom = document.getElementById("KnIliKom");
    switch(CijenaIliKolicina)
    {
        case "Cijena": knilikom.value = "KN";
            break;
        case "Kolicina": knilikom.value = "Kom";
            break;
        default:
            knilikom.value = "";
            alert("Odaberite Cijenu ili Kolicinu");
    }
}




