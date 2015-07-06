function colorPoints(){



/////// 2015 //////Points
for (i=1, j=0; i<=4, j<=3; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,2015))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)



       .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
           d3.select(this).attr("r", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("r", radius);
        })

    .attr("class", "points")

  };



//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){   return paddingY+  abstand(0)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){   return paddingY+  abstand(3)})    // y position of the second end of the line
    .attr("stroke-width",.5)


 

//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(1.5) })
      .text("2015")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText)






///Text label months
for (h=1, j=0; h<=4, j<=3; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };


/////// 2014 //////
for (i=1, j=6; i<=12, j<=17; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,2014))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)

       .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")



};

$('.points').hide();


  //Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(6)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(17)})    // y position of the second end of the line
    .attr("stroke-width",.5)


//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(11.5) })
      .text("2014")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText)

           .on("click", function(){
          $('.toggletest2014').toggle(1500) 
    });
    


///Text label months
for (h=1, j=6; h<=12, j<=17; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };






/////// 2013 //////
for (i=1, j=20; i<=12, j<=31; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,2013))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)


         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

    .attr("class", "points")
};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(20)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(31)})    // y position of the second end of the line
    .attr("stroke-width",.5)


//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(25.5) })
      .text("2013")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=20; h<=12, j<=31; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };





/////// 2012 //////
for (i=1, j=34; i<=12, j<=45; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,2012))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })

      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)

         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

    .attr("class", "points")
};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(34)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(45)})    // y position of the second end of the line
    .attr("stroke-width",.5)


//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(39.5) })
      .text("2012")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);


///Text label months
for (h=1, j=34; h<=12, j<=45; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };




/////// 2011 //////
for (i=1, j=48; i<=12, j<=59; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,2011))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)

         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

    .attr("class", "points")
};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(48)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(59)})    // y position of the second end of the line
    .attr("stroke-width",.5)


//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(53.5) })
      .text("2011")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);


///Text label months
for (h=1, j=48; h<=12, j<=59; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };




/////// 2010 //////
for (i=1, j=62; i<=12, j<=73; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,2010))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })

      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)

         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

        .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(62)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(73)})    // y position of the second end of the line
    .attr("stroke-width",.5)


//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(67.5) })
      .text("2010")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);


///Text label months
for (h=1, j=62; h<=12, j<=73; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };




/////// 2009 //////
for (i=1, j=76; i<=12, j<=87; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,2009))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)

         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

            .attr("class", "points")

};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(76)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(87)})    // y position of the second end of the line
    .attr("stroke-width",.5)


//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(81.5) })
      .text("2009")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);


///Text label months
for (h=1, j=76; h<=12, j<=87; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };








/////// 2008 //////
for (i=1, j=90; i<=12, j<=101; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,2008))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)

         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

            .attr("class", "points")

};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(90)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(101)})    // y position of the second end of the line
    .attr("stroke-width",.5)


//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(95.5) })
      .text("2008")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);


///Text label months
for (h=1, j=90; h<=12, j<=101; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };




/////// 2007 //////
for (i=1, j=104; i<=12, j<=115; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,2007))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)

         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

            .attr("class", "points")

};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(104)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(115)})    // y position of the second end of the line
    .attr("stroke-width",.5)


//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(109.5) })
      .text("2007")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);


///Text label months
for (h=1, j=104; h<=12, j<=115; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };





      /////// 2006 //////
for (i=1, j=118; i<=12, j<=129; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,2006))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)

         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

            .attr("class", "points")

};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(118)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(129)})    // y position of the second end of the line
    .attr("stroke-width",.5)


//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(123.5) })
      .text("2006")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);


///Text label months
for (h=1, j=118; h<=12, j<=129; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };


        /////// 2005 //////
for (i=1, j=132; i<=12, j<=143; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,2005))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)

         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

            .attr("class", "points")

};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(132)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(143)})    // y position of the second end of the line
    .attr("stroke-width",.5)


//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(137.5) })
      .text("2005")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);


///Text label months
for (h=1, j=132; h<=12, j<=143; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };




/////// 2004 //////
for (i=1, j=146; i<=12, j<=157; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,2004))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)

         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })
      
      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(146)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(157)})    // y position of the second end of the line
    .attr("stroke-width",.5)


//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(151.5) })
      .text("2004")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=146; h<=12, j<=157; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };



/////// 2003 //////
for (i=1, j=160; i<=12, j<=171; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,2003))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)

         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")

};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(160)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(171)})    // y position of the second end of the line
    .attr("stroke-width",.5)


//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(165.5) })
      .text("2003")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=160; h<=12, j<=171; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };





/////// 2002 //////
for (i=1, j=174; i<=12, j<=185; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,2002))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)

         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

          .attr("class", "points")

};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(174)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(185)})    // y position of the second end of the line
    .attr("stroke-width",.5)


//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(179.5) })
      .text("2002")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);


///Text label months
for (h=1, j=174; h<=12, j<=185; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };





/////// 2001 //////
for (i=1, j=188; i<=12, j<=199; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,2001))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)

         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

          .attr("class", "points")

};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(188)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(199)})    // y position of the second end of the line
    .attr("stroke-width",.5)


//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(193.5) })
      .text("2001")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);


///Text label months
for (h=1, j=188; h<=12, j<=199; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };




/////// 2000 //////
for (i=1, j=202; i<=12, j<=213; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,2000))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)


         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(202)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(213)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(207.5) })
      .text("2000")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=202; h<=12, j<=213; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };





/////// 1999 //////
for (i=1, j=216; i<=12, j<=227; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1999))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)



         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(216)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(227)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(221.5) })
      .text("1999")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=216; h<=12, j<=227; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };



/////// 1998 //////
for (i=1, j=230; i<=12, j<=241; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1998))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)





         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")



};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(230)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(241)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(235.5) })
      .text("1998")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=230; h<=12, j<=241; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };


/////// 1997 //////
for (i=1, j=244; i<=12, j<=255; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1997))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)





         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(244)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(255)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(249.5) })
      .text("1997")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=244; h<=12, j<=255; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };



/////// 1996 //////
for (i=1, j=258; i<=12, j<=269; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1996))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)





         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(258)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(269)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(263.5) })
      .text("1996")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=258; h<=12, j<=269; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };




 /////// 1995 //////
for (i=1, j=272; i<=12, j<=283; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1995))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)





         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(272)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(283)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(277.5) })
      .text("1995")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=272; h<=12, j<=283; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };




 /////// 1994 //////
for (i=1, j=286; i<=12, j<=297; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1994))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)





         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(286)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(297)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(291.5) })
      .text("1994")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=286; h<=12, j<=297; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };



  /////// 1993 //////
for (i=1, j=300; i<=12, j<=311; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1993))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)





         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(300)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(311)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(305.5) })
      .text("1993")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=300; h<=12, j<=311; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };




   /////// 1992 //////
for (i=1, j=314; i<=12, j<=325; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1992))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)





         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(314)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(325)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(319.5) })
      .text("1992")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=314; h<=12, j<=325; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };



   /////// 1991 //////
for (i=1, j=328; i<=12, j<=339; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1991))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)





         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(328)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(339)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(333.5) })
      .text("1991")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=328; h<=12, j<=339; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };



   /////// 1990 //////
for (i=1, j=342; i<=12, j<=353; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1990))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)





         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(342)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(353)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(347.5) })
      .text("1990")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=342; h<=12, j<=353; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };



   /////// 1989 //////
for (i=1, j=356; i<=12, j<=367; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1989))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)





         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(356)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(367)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(361.5) })
      .text("1989")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=356; h<=12, j<=367; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };



   /////// 1988 //////
for (i=1, j=370; i<=12, j<=381; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1988))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)





         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(370)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(381)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(375.5) })
      .text("1988")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=370; h<=12, j<=381; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };


    /////// 1987 //////
for (i=1, j=384; i<=12, j<=395; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1987))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)





         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(384)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(395)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(389.5) })
      .text("1987")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=384; h<=12, j<=395; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };





     /////// 1986 //////
for (i=1, j=398; i<=12, j<=409; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1986))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)





         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(398)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(409)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(403.5) })
      .text("1986")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=398; h<=12, j<=409; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };




     /////// 1985 //////
for (i=1, j=412; i<=12, j<=423; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1985))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)





         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(412)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(423)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(417.5) })
      .text("1985")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=412; h<=12, j<=423; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };



      /////// 1984 //////
for (i=1, j=426; i<=12, j<=437; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1984))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)





         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(426)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(437)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(431.5) })
      .text("1984")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=426; h<=12, j<=437; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };



      /////// 1983 //////
for (i=1, j=440; i<=12, j<=451; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1983))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)





         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(440)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(451)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(445.5) })
      .text("1983")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=440; h<=12, j<=451; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };




      /////// 1982 //////
for (i=1, j=454; i<=12, j<=465; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1982))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)





         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(454)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(465)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(459.5) })
      .text("1982")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=454; h<=12, j<=465; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };




      /////// 1981 //////
for (i=1, j=468; i<=12, j<=479; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1981))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)





         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(468)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(479)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(473.5) })
      .text("1981")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=468; h<=12, j<=479; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };





      /////// 1980 //////
for (i=1, j=482; i<=12, j<=493; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1980))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)





         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(482)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(493)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(487.5) })
      .text("1980")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=482; h<=12, j<=493; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };



 /////// 1979 //////
for (i=1, j=496; i<=12, j<=507; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1979))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)





         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(496)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(507)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(501.5) })
      .text("1979")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=496; h<=12, j<=507; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };



 /////// 1978 //////
for (i=1, j=510; i<=12, j<=521; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1978))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)





         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(510)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(521)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(515.5) })
      .text("1978")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=510; h<=12, j<=521; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };



 /////// 1977 //////
for (i=1, j=524; i<=12, j<=535; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1977))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)





         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(524)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(535)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(529.5) })
      .text("1977")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=524; h<=12, j<=535; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };




 /////// 1976 //////
for (i=1, j=538; i<=12, j<=549; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1976))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)


      .attr("class", "points")



         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })



};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(538)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(549)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(543.5) })
      .text("1976")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=538; h<=12, j<=549; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };


 /////// 1975 //////
for (i=1, j=552; i<=12, j<=563; i++, j++){
  vis.selectAll("circles")
      .data(dataInput(i,1975))
      .enter()
      .append("circle")
      .attr("fill", function(d){
        if (d.Identifikation == "") { return alt} else {return color};
      })
      .attr("cx", function(d,i){   return paddingX + i*zwischen            
      })
      .attr ("cy", function(d){  return paddingY+  abstand(j)})
      .attr("r", radius)





         .on('mouseover', function(d) {
          console.log(d);
          d3.select(this).style('fill', 'white');
          d3.select(this).attr("ry", radius*2);
           d3.select(this).attr("rx", radius*4);
        })

    .on('mouseout', function(d) {
          console.log(d);
          d3.select(this).style('fill', color);
           d3.select(this).attr("ry", radius);
           d3.select(this).attr("rx", radius);
        })

      .attr("class", "points")


};

//Path left
vis.append("line")          // attach a line
    .style("stroke", colorPath)  // colour the line
    .attr("x1", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the first end of the line
    .attr("y1", function(d){  return paddingY+  abstand(552)})      // y position of the first end of the line
    .attr("x2", function(d,i){   return paddingX -20 + i*zwischen})     // x position of the second end of the line
    .attr("y2", function(d){  return paddingY+  abstand(563)})    // y position of the second end of the line
    .attr("stroke-width",.5)




//Text label year
vis.append("text")
      .attr("x", function(d,i) {  return paddingX -labelPad + i*zwischen})
      .attr("y", function(d) { return paddingY+  abstand(557.5) })
      .text("1975")
      .attr("font-family", "Roboto")
      .attr("font-size", fontSize+"px")
      .attr("fill", colorPathText);



///Text label months
for (h=1, j=552; h<=12, j<=563; h++, j++){
vis.append("text")
      .attr("x", paddingX -50)
      .attr("y", paddingY+2+  abstand(j)) 
      .text(scaleMonth(h))
      .attr("font-family", "Roboto")
      .attr("font-size", fontSizeMonths+"px")
      .attr("fill", alt)
      .attr("class", "labelMonths")

 };
	
};