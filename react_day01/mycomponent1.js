//rcc 치면, 클래스기반 컴포넌트를 만들어준다 (왜냐하면, react 확장팩 다운받음)
import React, { Component } from 'react';

//클래스 컴포넌트 첫글자는 대문자로 해야 한다
class Mycomponent1 extends Component {
    render() {
        return (
            <div>
            <h1>클래스기반 컴포넌트</h1>
                
            </div>
        );
    }
}

export default Mycomponent1;         //컴포넌트를 외부로 노출시켜야 사용이 가능하다
