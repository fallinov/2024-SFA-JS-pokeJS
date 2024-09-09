function executeCommand() {
    const command = document.getElementById('command-input').value;

    // Réinitialiser le contenu de la div output avant d'afficher un nouveau résultat
    document.getElementById('output').innerHTML = '';

    let output = '';
    try {
        // Exécuter la commande saisie
        const result = eval(command);

        // Vérifier si le résultat est un Node ou une NodeList
        if (result instanceof Node) {
            output = result.outerHTML;
        } else if (result instanceof NodeList) {
            result.forEach(node => {
                output += node.outerHTML + '\n';
            });
        } else {
            // Pour d'autres types de résultats, comme des chaînes de caractères
            output = `Résultat : ${result}`;
        }

        // Afficher le résultat ou les erreurs
        document.getElementById('output').innerHTML = `${output}`;
    } catch (error) {
        document.getElementById('output').innerHTML = `<pre>Erreur : ${error.message}</pre>`;
    }
}
