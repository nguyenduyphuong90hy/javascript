<script type="text/javascript" src="<%=contextPath%>/js/jquery-1.9.1_p.js"></script>
<script type="text/javascript" src="<%=contextPath%>/js/moment.min.js"></script>
<script type="text/javascript">
function validate1(){
	var b1 = $('input[name=ngaynhan]').val();
	var a=moment(b1, "DD MM YYYY").isValid();
    if (a==true) {
      return true;
    }
    else {
          alert('<bean:message key="hopdong.lapdutoanchiphi.dinhddangngay" bundle="<%=interfaces%>"/>');
        $('input[name=ngaynhan]').val("");
          return false;
    }
}
</script>
 $("input#dienthoai_nguoidk").formance("format_number") // setup the formatter
                    .on('keyup', function(event) {
                        if ($(this).formance('validate_number')) {} else {
                            alert('<bean:message key="danhsachhoadonnhap.capnhat.number" bundle="<%=interfaces%>"/>');
                        }
                    });
