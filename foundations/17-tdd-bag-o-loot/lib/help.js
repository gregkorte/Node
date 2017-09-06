#!node
'use strict';

const lootHelp = () => {
    console.log(
        `The folowing are a list of commands you can enter into the command prompt:\n\n
        add <child name> <toy>     [Adds a toy for specified child to the loot bag.]\n
        delivered <child name>      [Toggles boolean (t/f) for toy delivered status.]\n
        listAll                     [Lists all child/toy pairings and delivery status.]\n
        listOne <child name>        [Lists one child's name/toy and delivery status.]\n
        remove <child name>         [Removes the child/toy pairing entered.]`
    )
}

module.exports = { lootHelp };
