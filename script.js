function Ajouter(form) {
    var livre = new Option(form.newbook.value);
    form.liste.options[form.liste.options.length] = livre;
}

function Supprimer(list) {
    if (list.options.selectedIndex >= 0) {
        list.options[list.options.selectedIndex] = null;
    } else {
        alert("Suppression impossible : aucune ligne sélectionnée");
    }
}

function SupprimerTout(list) {
    list.options.length = 0;
}