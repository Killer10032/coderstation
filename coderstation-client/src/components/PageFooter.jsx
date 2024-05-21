import React from 'react';

function PageFooter(props) {
    return (
        <>
            <p className="links">
                <span className="linkItem">友情链接：</span>
                <a
                    href="https://duyi.ke.qq.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="linkItem"
                >
                    Killer Queen
                </a>
                <a
                    href="http://www.yuanjin.tech/"
                    target="_blank"
                    rel="noreferrer"
                    className="linkItem"
                >
                    Killer Queen 的博客
                </a>
                <a
                    href="http://yanhongzhi.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="linkItem"
                >
                    Mr.Nan
                </a>
                <a
                    href="https://blog.csdn.net/jackfrued"
                    target="_blank"
                    rel="noreferrer"
                    className="linkItem"
                >
                    Killer Queen 的技术专栏
                </a>
            </p>
            <p>© 2024 - Coder Station</p>
            <p>Powered by Create React App</p>
        </>
    );
}

export default PageFooter;