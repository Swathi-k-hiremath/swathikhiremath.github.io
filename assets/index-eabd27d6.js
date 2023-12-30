import{j as t,m as e}from"./index-fd1552ec.js";import{r as o}from"./globalVariants-43ca08f3.js";const r=[{id:1,title:"Question-answer generation with RAG",description:"The project aimed to automate knowledge extraction from video descriptions for the creation of surveys and quizzes for a market research company. By utilizing Language Models (LLMs) with Retrieval Augmented Generation and incorporating few-shot training techniques, the system efficiently generated context-aware questions and answers. The video's description and summary served as a knowledge base, mitigating hallucinations in the generated content. Through careful implementation, the model achieved a significant 60% reduction in the time required for question and answer generation, demonstrating its effectiveness in enhancing efficiency and reliability in information retrieval processes.",link:"https://github.com"},
                                                                                                         {id:2,title:"LLM driven distractor generation",description:"The project involved the development and deployment of a scalable deep learning solution that utilized a generative Language Model (GPT-2) to create distractors for Multiple-Choice Questions (MCQs). A custom dataset was curated to train the model, ensuring that the generated distractors adhered to a similar grammatical construct as the correct answers. The system also maintained consistent length, tone, and clarity in the distractors, preventing ambiguity and avoiding cues that could easily reveal the correct answer. This innovative approach resulted in substantial cost savings, amounting to 3 million USD in the first year, showcasing the impactful use of generative LLMs in optimizing and automating the creation of high-quality MCQ content.",link:"https://github.com"},
                                                                                                         {id:3,title:"Deep Learning based defect detection",description:"The project involved the development of tailored Deep Learning models specifically designed for the identification of defects in car and airplane parts. Achieving a notable 76% accuracy rate in the initial phase, the models were further extended to encompass printer defect identification, resulting in a substantial accuracy improvement to 87%. The project's innovation was underscored by the implementation of advanced fine-tuning techniques, effectively reducing the time required to transition from development to production by a significant 4 weeks. This holistic approach enhanced defect identification accuracy across diverse domains and demonstrated a commitment to efficiency by using transfer learning.",link:"https://github.com"},
                                                                                                         {id:4,title:"Popularity prediction for anime",description:"The project utilized advanced data analysis and data engineering expertise, to crafted a precise predictive model for anime popularity scores. The model incorporated more than 50 diverse properties, encompassing cultural and demographic factors, in a creative approach to capture the nuanced aspects influencing popularity. The result was a highly accurate predictive model, consistently delivering predictions within a narrow 3% margin. This level of accuracy proved instrumental in facilitating well-informed Over-The-Top (OTT) purchase decisions, demonstrating the efficacy of the model in guiding strategic content acquisition and distribution strategies.",link:"https://github.com"},
                                                                                                         {id:5,title:"Recommendation tool for strategic advertising ",description:"A recommendation tool was developed employing data analytics, time series predictive models, and machine learning techniques. With a focus on maximizing viewership based on audience demographics and interests, the tool utilized over 40 features for data-driven recommendations. To handle high cardinality data effectively, custom embeddings were trained and extracted. The tool extended its capabilities to recommend optimal times and networks for airing ads, aiming to achieve maximum viewership and impact. This comprehensive approach ensured tailored recommendation system for enhanced content engagement and strategic advertising placement.",link:"https://github.com"},
                                                                                                         {id:6,title:"Multimodal Data Extraction and Visualization",description:"Spearheaded the development and integration of Automatic Speech Recognition (ASR) and data extraction models was , resulting in the extraction of over 200 data points encompassing both general and industry-specific information from advertisements. This initiative involved overseeing cross-functional teams and coordinating efforts to implement advanced models, including entity extraction, keyword extraction, and semantic matching from text. Additionally, the models incorporated object detection and scene understanding in videos, enhancing the depth of information extraction. The integration also featured SQL table lookups for phrase matching. A key aspect of this project was the subsequent management of these data insights through the design of an intuitive interface, facilitating visualization and deriving valuable market insights from the extracted data.",link:"https://github.com"},
                                                                                                         {id:7,title:"Generative AI-photoshop",description:"Developed a feature-rich Photoshop-AI app using advanced Deep Learning techniques. Trained models with context encoders for image inpainting, U-nets and RCNNs for precise segmentation, and GANs for dynamic effect generation and image filling. This versatile application enhances photo editing with seamless background generation, object removal, and the 3-D Ken Burns Effect, offering users a powerful suite of creative tools.",link:"https://github.com"},
                                                                                                         {id:8,title:"Efficient retreival and scene matching in videos",description:"Realized a 60% reduction in storage requirements through the implementation of innovative video compression techniques employing creative hashing methods. Complemented this approach with advanced scene comparison techniques utilizing deep learning and Locality-Sensitive Hashing (LSH), resulting in an efficient and streamlined video retrieval and matching system. This initiative not only optimized storage utilization but also enhanced the overall efficiency of video processing and content retrieval.",link:"https://github.com"}]
  ,s={hidden:{opacity:0,y:-10},show:{opacity:1,y:0,transition:{ease:"easeOut",duration:.2}},exit:{opacity:0,transition:{ease:"easeIn",duration:.2}}},c=()=>t.jsxs(e.div,{className:"projects--container",initial:"hidden",animate:"show",exit:"exit",variants:o,children:[t.jsx("h2",{children:"Projects"}),t.jsx("section",{children:r.map(i=>t.jsxs(e.div,{className:"projects--item",variants:s,children:[t.jsx("h3",{children:i.title}),t.jsx("p",{children:i.description}),t.jsx("a",{target:"_blank",rel:"noreferrer",href:i.link,children:"View on Github"})]},`project-item-${i.id}`))})]});export{c as default};
