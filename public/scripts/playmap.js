window.onload = function () {
    let a_map = d3.select("svg");
    console.log(a_map);
    doMap(a_map, defaultParams);
    formatMap(a_map)
};

const setTM = (element, m) => element.transform.baseVal.initialize(element.ownerSVGElement.createSVGTransformFromMatrix(m))

function formatMap(an_svg) {
    an_svg.selectAll("path.river")
        .attr("fill", "none")
        .attr("stroke", "LightSlateGrey")
        .attr("stroke-width", 2)
    an_svg.selectAll("path.coast")
        .attr("fill", "none")
        .attr("stroke", "DarkSlateGrey")
        .attr("stroke-width", 3)
    an_svg.selectAll("path.border")
        .attr("fill", "none")
        .attr("stroke-dasharray", "3,1")
        .attr("stroke-width", 2)
        .attr("stroke", "LightCoral");
    an_svg.selectAll("line.slope")
        .attr("fill", "none")
        .attr("stroke", "Gainsboro")
        .attr("stroke-width", 1)
        .lower();

    an_svg.selectAll("text")
        .attr("fill", "black")
        .each(function(t, i) {
            const bbx = this.getBBox();
            const w = bbx.width;
            const h = bbx.height
            const aln = d3.select(this).style("text-anchor")
            const ofx = (aln === "start" ? 0
                : aln === "middle" ? 0.5*w
                : aln === "end" ? 1.2*w
                : 1000);
            const ofy = 1.2 * h;
            console.log(d3.select(this).style("text-anchor"));
            const rct = an_svg.append("svg:rect")
                .classed("text-rect", true)
                .attr("x", 1000 * t.x - ofx)
                .attr("y", 1000 * t.y - h)
                .attr("width", 1.2*w)
                .attr("height", 1.2*h)
                .attr("fill", "white")
                .attr("fill-opacity", 0.75);
        })
        .raise();
}