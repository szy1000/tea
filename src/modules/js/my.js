var quill = new Quill('#editor-container', {
  modules: {
    formula: true,
    syntax: true,
    toolbar: '#toolbar-container'
  },
  placeholder: '快来写点什么吧',
  theme: 'snow'
});

$(document).ready(function () {
	$("input[name=award]").click(function(){
		if($("#open").attr("checked")){
			$("tr.award").css('display','table-row');
		}else{
			$("tr.award").css('display','none');
		}
	})
	$("input[name=ways]").click(function(){
		if($("#groups").attr("checked")){
			$("tr.priceRange").css('display','none');
			$("tr.priceGroups").css('display','table-row');
		}else{
			$("tr.priceGroups").css('display','none');
			$("tr.priceRange").css('display','table-row');
		}
	})
})