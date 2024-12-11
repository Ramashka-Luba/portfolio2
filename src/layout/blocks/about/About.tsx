import React from 'react';
import Photo from '../../../assets/images/photo.jpg'
import styled from "styled-components";

export const About = () => {
    return (
        <StyledAbout>
            <StyledAboutWrap>
                <div>
                    <h2>About Me</h2>
                    <div>I look at usual things with my unsual eyes.</div>
                    <img src={Photo}/>
                </div>
                <div>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
                        Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta.
                        Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit sagittis in eleifend dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque viverra lectus arcu, tincidunt ultrices pellentesque.
                    </span>
                    <img src={Photo}/>
                </div>
            </StyledAboutWrap>


        </StyledAbout>

    );
};

const StyledAbout = styled.div `
    background-color: #131212;
    padding-block: 100px 200px;
`

const StyledAboutWrap = styled.div`
    max-width: 1040px;
    margin-inline: auto;
    display: flex;
    gap: 60px;
    color: #fff;
    outline: 1px solid red;

    img {
        width: 490px;
        height: 489px;
        object-fit: cover;
        margin-top: 200px;
    }
`