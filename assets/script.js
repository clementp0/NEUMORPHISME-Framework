$(document).ready(function() {
    $('#show1').click(function() {
        $('.show_code_1').slideToggle("fast");
    });
});

$(document).ready(function() {
    $('#show2').click(function() {
        $('.show_code_2').slideToggle("fast");
    });
});

$(document).ready(function() {
    $('#show3').click(function() {
        $('.show_code_3').slideToggle("fast");
    });
});

$(document).ready(function() {
    $('#show4').click(function() {
        $('.show_code_4').slideToggle("fast");
    });
});

$(document).ready(function() {
    $('#show5').click(function() {
        $('.show_code_5').slideToggle("fast");
    });
});

$(document).ready(function() {
    $('#show6').click(function() {
        $('.show_code_6').slideToggle("fast");
    });
});


function copyone() {
    let textarea = document.getElementById("textareaone");
    textarea.select();
    document.execCommand("copy");
}
function copytwo() {
    let textarea = document.getElementById("textareatwo");
    textarea.select();
    document.execCommand("copy");
}
function copytree() {
    let textarea = document.getElementById("textareatree");
    textarea.select();
    document.execCommand("copy");
}
function copyfour() {
    let textarea = document.getElementById("textareafour");
    textarea.select();
    document.execCommand("copy");
}
function copyfive() {
    let textarea = document.getElementById("textareafive");
    textarea.select();
    document.execCommand("copy");
}
function copysix() {
    let textarea = document.getElementById("textareasix");
    textarea.select();
    document.execCommand("copy");
}
function copyseven() {
    let textarea = document.getElementById("textareaseven");
    textarea.select();
    document.execCommand("copy");
}



$(document).ready(function() {
    $('#copyone').click(function() {
        $('.copied1').slideToggle("fast");
    });
});

$(document).ready(function() {
    $('#copytwo').click(function() {
        $('.copied2').slideToggle("fast");
    });
});

$(document).ready(function() {
    $('#copytree').click(function() {
        $('.copied3').slideToggle("fast");
    });
});

$(document).ready(function() {
    $('#copyfour').click(function() {
        $('.copied4').slideToggle("fast");
    });
});

$(document).ready(function() {
    $('#copyfive').click(function() {
        $('.copied5').slideToggle("fast");
    });
});

$(document).ready(function() {
    $('#copysix').click(function() {
        $('.copied6').slideToggle("fast");
    });
});

$(document).ready(function() {
    $('#copyseven').click(function() {
        $('.copied7').slideToggle("fast");
    });
});
