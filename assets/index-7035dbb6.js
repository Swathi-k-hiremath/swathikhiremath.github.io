import{j as e,m as i}from"./index-81551418.js";import{r as s}from"./globalVariants-43ca08f3.js";const a=[{id:1,title:"Topic modelling for social behavior understanding",description:"Implemented topic modeling by leveraging quantized Language Models (LLMs) and prompt engineering techniques to discern COVID-related topics within tweets. Conducted experiments to model and assess the impact of these topics and mobility on statistical Ordinary Differential Equation (ODE) models. The application extended beyond topic identification, using the model to identify misinformation spread and employing various tweet topics to model social behaviors based on opinions and feeling expressed in tweets. Additionally, the integration of mobility data allowed for a comprehensive assessment of its impact on the spread of COVID, providing a nuanced understanding of the interplay between online discourse and real-world dynamics.",link:"https://github.com"},
                                                                                                         {id:2,title:"Conversation modelling ",description:"Led the development of a conversation summary model utilizing BERT LLM and the T5 model. This model excels in extracting meaningful summaries of answers, specifically focusing on discussions with policymakers during the COVID era. The aim was to extraction information that delved into the thought processes behind their decisions and the subsequent impacts, capturing their journey from the pandemic's onset to the implementation of crucial policies. The model's capabilities extended to highlighting similarities and differences in answers across 10-15 distinct focus groups, providing valuable insights into the nuanced perspectives of policymakers during this critical period.",link:"https://github.com"},
                                                                                                         {id:3,title:"Custom LLM for agricultural proposals",description:"The primary goal was to streamline the process of writing proposals for various agricultural grants, empowering farmers to effortlessly generate grant-worthy proposals. Tailored the Llama Language Model (LLM) for the specific task of generating reports and proposals for agricultural grants. Employed advanced techniques such as quantization and fine-tuning, incorporating human-written proposals with domain-specific keywords to distinguish and optimize for 14 distinct types of documents. This customized LLM approach not only enhanced efficiency but also facilitated a more targeted and tailored approach to proposal generation in the agricultural domain.",link:"https://github.com"},
                                                                                                         {id:4,title:"Automatic Seed segregation",description:"Engineered a solution for the automatic segregation of seeds in magnified images, employing a two-phase approach. In Phase 1, Computer Vision algorithms including color thresholding and edge detection were implemented using OpenCV for feature extraction. Phase 2 involved the utilization of Convolutional Neural Networks (CNN) to enhance accuracy. The designed solution achieved an impressive 93% test accuracy, validated through conductivity tests, showcasing the efficacy of the system in accurately segregating seeds based on visual features.",link:"https://github.com"}],
  r={hidden:{opacity:0,y:-10},show:{opacity:1,y:0,transition:{ease:"easeOut",duration:.2}},exit:{opacity:0,transition:{ease:"easeIn",duration:.2}}},c=()=>e.jsxs(i.div,{className:"research--container",initial:"hidden",animate:"show",exit:"exit",variants:s,children:[e.jsx("h2",{children:"Research"}),e.jsx("section",{children:a.map(t=>e.jsxs(i.div,{className:"research--item",variants:r,children:[e.jsx("h3",{children:t.title}),e.jsx("p",{children:t.description})]},`research-item-${t.id}`))})]});export{c as default};
