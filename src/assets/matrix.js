export default function() {

    const canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        drops = [],
        text = [],
        font_size = 15;

    canvas.height = window.innerHeight;
    canvas.width  = window.innerWidth*1.1;
    // eslint-disable-next-line no-undef
    let columns;
    columns = canvas.width/font_size;

    context.translate(canvas.width, 0);
    context.scale(-1, 1);

    context.fillStyle = "rgba(255, 255, 255, 1)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    //Half-width kana characters, Latin Numbers and Alphabets, in decreasing probability.
    const chars = '｢｣ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ｢｣ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ｢｣ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ123456789123456789123456789123456789123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    // eslint-disable-next-line no-undef
    for(let i = 0; i < columns; i++)
        drops[i] = (Math.random()*50)-50;

    function draw() {

        let i;
    // Black background with 0.25 opacity to show the trail.
        context.font = font_size + "px 'Consolas', 'Lucida Console'";
        context.fillStyle = "rgba(255, 255, 255, 0.06)";
        context.fillRect(0, 0, canvas.width, canvas.height);

        //Set the previous line to green so that the trail would remain green.
        context.fillStyle = "#000000";
        for(i = 0; i<drops.length; i++) {
            context.fillText(text[i], i*font_size, drops[i]*font_size);
        }

        // Generate new characters and display them, in white.
        context.fillStyle = "#FFF";
        for(i = 0; i<drops.length; i++) {
            drops[i]++;
            // Random character to print.
            text[i] = chars[Math.floor(Math.random()*chars.length)];
            // Parameters - text, x-pos, y-pos.
            context.fillText(text[i], i*font_size, drops[i]*font_size);

            // Sending the drop to the top randomly, after it has crossed the screen.
            if(drops[i]*font_size > canvas.height)
                drops[i] = (Math.random()*100)-100;
        }
    }

    setInterval(draw, 75);
}

