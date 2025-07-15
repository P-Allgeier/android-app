//what in the actual fuck is responsible for adding things to the UI list..?
function new_offer() {



}

function create_offer() {
    closeOverlay();
    setScenario('market')
}

function btn_create_offer_accept() {
    create_offer()
    closeOverlay()
}

function btn_create_offer_decline() {
    closeOverlay()
    //display_create_personal_board = false
}