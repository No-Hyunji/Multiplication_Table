// JS 대소문자 구분함 
// 순서도 그리면서 하기 

// 값 있는가 검사하기. if로 !
document.querySelector('#click').addEventListener('click', () => {
    // 버튼클릭을안하면 실행이 안돼요 
    const a = document.querySelector('#first').value
    const b = document.querySelector('#second').value
    const r = document.querySelector('#result')
    
    // 저장은 컴퓨터 메모리에 된다. 
    // span은 textContent.
    if (a) { 
        if (b) {
            const c = a * b
            r.textContent = c;
        } else {
            r.textContent = '두 번째 값 입력해'
        }
    } else {
        r.textContent = '첫 번째 값 입력해 '
    }
});