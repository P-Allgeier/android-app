function new_offer_event(e) {
    // parse data
    var op = e.public[3]
    if (typeof op === 'string' && op.startsWith("offer::")) {
         isOffer = true;
         op = op.replace("offer::", "");
    }

    var bid = op == Operation.BOARD_CREATE ? e.header.ref : e.public[1]
    var prev = e.public[2] != "null" ? e.public[2] : []
    var args = e.public.length > 4 ? e.public.slice(4) : []

    // add new entry if it is a new board
    if (!(bid in tremola.offers)) {
        tremola.board[bid] = {
            "operations": {}, // all received operations for this board
            "sortedOperations": new Timeline(), // "linear timeline", sorted list of operationIds
            "members": [e.header.fid], // members of the board
            "forgotten": false, // flag for hiding this board from the board list
            "name": bid.toString().slice(0, 15) + '...', // name of the board
            "curr_prev": [], // prev pointer
            "columns": {},
            "items": {},
            "numOfActiveColumns": 0,
            "history": [],
            "lastUpdate": Date.now(),
            "unreadEvents": 0,
            "subscribed": false,
            "pendingInvitations": {}, // User: [inviteIds]
            "key": bid.toString(),
            "flags": []
        }
    }

    var board = tremola.offers[bid]
}