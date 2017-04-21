/**
 * Copyright (c) 2013 Marcel Bretschneider <marcel.bretschneider@gmail.com>;
 * Copyright (c) 2017 Keith Maika <keithm@kickenscripts.us>;
 * Licensed under the MIT license
 */


(function(){
    var svgelem = function(tagName){
        return document.createElementNS("http://www.w3.org/2000/svg", tagName);
    };
    var svgcanvas = function(width, height){
        var svg = svgelem("svg");
        svg.setAttribute("width", width);
        svg.setAttribute("height", height);

        var g = svgelem("g");
        svg.appendChild(g);

        return svg;
    };
    var container = function(className){
        var container = document.createElement("div");
        container.setAttribute("class", className);
        var inner = document.createElement("div");
        container.appendChild(inner);
        return container;
    };
    var path = function(settings){
        var p = svgelem("path");
        var styles = {
            "fill": "none",
            "stroke": settings.dial_stroke_color,
            "stroke-width": settings.dial_stroke_width + "px",
            "stroke-linecap": "butt",
            "stroke-linejoin": "miter",
            "stroke-opacity": "1"
        };
        var style = "";
        for (var i in styles){
            p.setAttribute(i, styles[i]);
        }
        return p;
    };

    this.Drum.DrumIcon = {
        up: function(settings){
            var width = settings.dial_w;
            var height = settings.dial_h;

            var svg = svgcanvas(width, height);
            var p = path(settings);

            p.setAttribute("d",
                "m0," + (height + settings.dial_stroke_width) + "l" + (width / 2) + ",-" + height + "l" + (width / 2) + "," + height);
            svg.firstChild.appendChild(p);

            var cont = container("dial up");
            cont.firstChild.appendChild(svg);
            return cont;
        },
        down: function(settings){
            var width = settings.dial_w;
            var height = settings.dial_h;

            var svg = svgcanvas(width, height);
            var p = path(settings);

            p.setAttribute("d",
                "m0,-" + settings.dial_stroke_width + "l" + (width / 2) + "," + height + "l" + (width / 2) + ",-" + height);
            svg.firstChild.appendChild(p);

            var cont = container("dial down");
            cont.firstChild.appendChild(svg);
            return cont;
        }
    };
}());