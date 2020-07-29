javascript:
var subjArray = [];
var toArray = [];
var tpArray = [];
var multiTPArray = [];
var x = document.getElementsByClassName("filename");
var subj,
attachedFileName,
TP,
mTP;

for (i = 0; i < x.length; i++) {
    attachedFileName = x[i];
    attachedFileName = attachedFileName.innerText;
    attachedFileName = attachedFileName.split("-");
    subj = attachedFileName[0] + "-" + attachedFileName[1] + "-" + attachedFileName[2];
    subjArray.push(subj);
    TP = attachedFileName[3].split(".");
    TP = TP[0];
    if (TP.length >= 4) {
        mTP = TP.split("_");
        console.log(mTP, " | ", mTP.length, mTP[0]);
        for (n = 0; n < mTP.length; n++) {
            console.log(mTP[n]);
            toArray.push(tpEmail(mTP[n]));
        }
    } else {
        toArray.push(tpEmail(TP));
    }
}
console.log(toArray);
console.log(subjArray);
document.getElementById("compose-subject").value = subjArray.join(", ");
document.getElementById("_to").value = toArray.join(", ");
document.getElementById("composebody").value = (" ");
console.log("click");

function tpEmail(val) {
    var result = {
        "ala": "dgsalabak@ucdp-smolian.com",
        "ard": "dgsardino@ucdp-smolian.com",
        "asn": "dgsasenovgrad@ucdp-smolian.com",
        "brn": "dgsborino@ucdp-smolian.com",
        "brv": "dlsborovo@ucdp-smolian.com",
        "bat": "dgsbatak@ucdp-smolian.com",
        "che": "dlschepino@ucdp-smolian.com",
        "dos": "dgsdospat@ucdp-smolian.com",
        "his": "dgshisar@ucdp-smolian.com",
        "hvo": "dgshvoyna@ucdp-smolian.com",
        "izv": "dlsizvora@ucdp-smolian.com",
        "jen": "dlsjenda@ucdp-smolian.com",
        "kar": "dgskarlovo@ucdp-smolian.com",
        "kir": "dgskirkovo@ucdp-smolian.com",
        "kli": "dgsklisura@ucdp-smolian.com",
        "kru": "dgskrumovgrad@ucdp-smolian.com",
        "kor": "dlskormisosh@ucdp-smolian.com",
        "mih": "dgsmihalkovo@ucdp-smolian.com",
        "pld": "dgsplovdiv@ucdp-smolian.com",
        "pan": "dgspanagyuriste@ucdp-smolian.com",
        "par": "dgsparvomai@ucdp-smolian.com",
        "pes": "dgspeshtera@ucdp-smolian.com",
        "paz": "dgspazardjik@ucdp-smolian.com",
        "rod": "dgsrodopi@ucdp-smolian.com",
        "rak": "dgsrakitovo@ucdp-smolian.com",
        "sel": "dgsselishte@ucdp-smolian.com",
        "lak": "dgsshirokalaka@ucdp-smolian.com",
        "pol": "dlsshirokapoliana@ucdp-smolian.com",
        "sla": "dgsslaveino@ucdp-smolian.com",
        "smi": "dgssmilian@ucdp-smolian.com",
        "tra": "dlstrakia@ucdp-smolian.com",
        "tri": "dgstrigrad@ucdp-smolian.com",
        "zla": "dgszlatograd@ucdp-smolian.com",
        "all": "dgsalabak@ucdp-smolian.com, dgsardino@ucdp-smolian.com, dgsasenovgrad@ucdp-smolian.com, dgsbatak@ucdp-smolian.com, dgsborino@ucdp-smolian.com, dlsborovo@ucdp-smolian.com, dlschepino@ucdp-smolian.com, dgsdospat@ucdp-smolian.com, dgshvoyna@ucdp-smolian.com, dgshisar@ucdp-smolian.com, dlsizvora@ucdp-smolian.com, dlsjenda@ucdp-smolian.com, dgskarlovo@ucdp-smolian.com, dgskirkovo@ucdp-smolian.com, dgsklisura@ucdp-smolian.com, dgskrumovgrad@ucdp-smolian.com, dlskormisosh@ucdp-smolian.com, dgsmihalkovo@ucdp-smolian.com, dgsmomchilgrad@ucdp-smolian.com, dgsplovdiv@ucdp-smolian.com, dgspazardjik@ucdp-smolian.com, dgspanagyuriste@ucdp-smolian.com, dgspeshtera@ucdp-smolian.com, dgsparvomai@ucdp-smolian.com, dgsrakitovo@ucdp-smolian.com, dgsrodopi@ucdp-smolian.com, dgsselishte@ucdp-smolian.com, dgsslaveino@ucdp-smolian.com, dgssmilian@ucdp-smolian.com, dgssmolyan@ucdp-smolian.com, dgsshirokalaka@ucdp-smolian.com, dlsshirokapoliana@ucdp-smolian.com, dgstrigrad@ucdp-smolian.com, dlstrakia@ucdp-smolian.com, dgszlatograd@ucdp-smolian.com",
        "okj": "dgsardino@ucdp-smolian.com, dgskirkovo@ucdp-smolian.com, dgskrumovgrad@ucdp-smolian.com, dgskardzhali@ucdp-smolian.com, dgsmomchilgrad@ucdp-smolian.com, dlsjenda@ucdp-smolian.com",
        "opl": "dgsasenovgrad@ucdp-smolian.com, dgskarlovo@ucdp-smolian.com, dgsklisura@ucdp-smolian.com, dgsplovdiv@ucdp-smolian.com, dgsparvomai@ucdp-smolian.com, dgshisar@ucdp-smolian.com, dlskormisosh@ucdp-smolian.com, dlstrakia@ucdp-smolian.com",
        "opz": "dgsalabak@ucdp-smolian.com, dgsbatak@ucdp-smolian.com, dgspazardjik@ucdp-smolian.com, dgspanagyuriste@ucdp-smolian.com, dgspeshtera@ucdp-smolian.com, dgsrakitovo@ucdp-smolian.com, dgsrodopi@ucdp-smolian.com, dgsselishte@ucdp-smolian.com, dlsborovo@ucdp-smolian.com, dlschepino@ucdp-smolian.com, dlsshirokapoliana@ucdp-smolian.com",
        "osm": "dgsborino@ucdp-smolian.com, dgsdospat@ucdp-smolian.com, dgszlatograd@ucdp-smolian.com, dgsmihalkovo@ucdp-smolian.com, dgsslaveino@ucdp-smolian.com, dgssmilian@ucdp-smolian.com, dgssmolyan@ucdp-smolian.com, dgstrigrad@ucdp-smolian.com, dgshvoyna@ucdp-smolian.com, dgsshirokalaka@ucdp-smolian.com, dlsizvora@ucdp-smolian.com",
        "rdg": "rugkarjali@iag.bg, rugsmolian@iag.bg, rugplovdiv@iag.bg, rugpazardjik@iag.bg",
        "rkj": "rugkarjali@iag.bg",
        "rpl": "rugplovdiv@iag.bg",
        "rpz": "rugpazardjik@iag.bg",
        "rsm": "rugsmolian@iag.bg",
        "gpl": "gssplovdiv@iag.bg",
        "lpl": "lzsplovdiv@iag.bg",
        "swdp": "swdp@abv.bg",
        "hub": "vhubcheva@mzh.government.bg",
        "sta": "l.stateva@ucdp-smolian.com",
        "kas": "s.kasabov@ucdp-smolian.com",
        "iva": "a.ivanov@ucdp-smolian.com",
        "mob": "bsokolov@mzh.government.bg,epopova@mzh.government.bg,	stodorov@mzh.government.bg",
        "krr": "krastio@ucdp-smolian.com",
        "bog": "n.bogdanova@ucdp-smolian.com",
        "kni": "knijovnost96@abv.bg",
        "ktr": "a.ivanov@ucdp-smolian.com, l.stateva@ucdp-smolian.com, b.toshev@ucdp-smolian.com, z.bakalov@ucdp-smolian.com, g.gagov@ucdp-smolian.com, tvasilev@ucdp-smolian.com, r.boev@ucdp-smolian.com, i.simeonov@ucdp-smolian.com",
        "mar": "emarinov@mzh.government.bg",
        "apo": "office@apolo.bg",
        "gov": "governor@region-smolyan.org",
        "vel": "velichkova@iag.bg",
        "cho": "k.cholakov@ucdp-smolian.com",
        "ant": "akostova@mzh.government.bg",
        "nrr": "rashkov.nikola@gmail.com"
    }
    return result[val];
}
