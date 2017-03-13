/*Author:Hx*/
(function($) {     
  // 合并单元格     
  $.fn.mergecells = function(options) {         
    return this.each(function() {     
      	$this = $(this);     
    	var totalCols = $this.find("tr:eq(0)").find("td").length;
    	var totalRows = $this.find("tr").length;
	    for ( var i = totalCols-1; i >= 1; i--) {
	        for ( var j = totalRows-1; j >= 1; j--) {
	            startCell = $this.find("tr").eq(j).find("td").eq(i);
	            targetCell = $this.find("tr").eq(j - 1).find("td").eq(i);
	            if (startCell.text() == targetCell.text() && targetCell.text() != "") {
	                targetCell.attr("rowSpan", (startCell.attr("rowSpan")==undefined)?2:(eval(startCell.attr("rowSpan"))+1));
	                startCell.remove();
	            }
	        }
	    }
    });     
  };     
})(jQuery);  