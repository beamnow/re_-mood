{/* <script>
    var checkUnload = true;    
    $(window).on("beforeunload", function(){
        if(checkUnload) return "이 페이지를 벗어나면 작성된 내용은 저장되지 않습니다.";    
    });
</script>

$("#saveBtn").on("click", function(){
        checkUnload = false;
        $("#saveForm").submit();
}); */}
// $('input[name=chklist]:checked').each(function() {	$(this).toggleClass("checksign", true); // addClass, removeClass   });

//삭제되어야 하는 값을 체크 후 삭제버튼 눌렀을 때 실행되는 함수
function getCheckboxValue() {
    //선택된 목록 가져오기
    const query = 'input[name="chklist"]:checked';
    const selectedEls =document.querySelectorAll(query);

      // 선택된 목록에서 value 찾기 chklist중 선택된 value값 result에 저장
  let result = '';
  selectedEls.forEach((el) => {
    result += el.value + ' ';
  });
  
  // html 상에서 출력 > html에 객체 선언안돼서 주석해제 해도 안댐
  //document.getElementById('result').innerText = result;

  //콘솔로 확인 > 출력은 music0 music2 이런 식
  console.log(JSON.parse(JSON.stringify(result)));



}


// $(function(){
//     $('.del').click(function(){
//        location.replace('');
//     });
// });