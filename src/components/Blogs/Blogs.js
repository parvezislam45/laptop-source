import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <h1>This is Blog</h1>
            <div className="container">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is Context Api??</Accordion.Header>
                        <Accordion.Body>
                            React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. It returns a consumer and a provider.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What Is Semantic Teg ???</Accordion.Header>
                        <Accordion.Body>
                            Semantic HTML5 addresses this shortcoming by defining specific tags to indicate clearly what role is played by the content those tags contain. That explicit information helps robots/crawlers like Google and Bing to better understand which content is important, which is a subsidiary, which is for navigation, and so on.By adding semantic HTML tags to your pages, you provide additional information that helps Google and Bing understand the roles and relative importance of the different parts of your page.Semantic HTML5 is one of those seemingly small details that hits right at the core of indexing that is often underestimated.the correct use of semantic HTML5 gives your content an advantage in the selective process that is right at the foundation of ranking. It increases the chances that the ranking algorithms will select your content as a candidate for ranking in the first place. 
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blogs;