import React from 'react';
import '../App.css';
import './Badge.css';

import Markdown from 'react-markdown'

const SKILL_TO_MARKDOWN_BADGE_MAP = {
  "Python": "![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)",
  "Java": "![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white)",
  "HTML": "![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)",
  "CSS": "![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)",
  "JavaScript": "![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)",
  "AWS": "![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)",
  "Git": "![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)",
  "Jira": "![Jira](https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white)",
  "Agile": "![Agile](https://img.shields.io/badge/Agile-%230090FF.svg?style=for-the-badge&logo=Agile&logoColor=white)",
  "Figma": "![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)",
  "Linux": "![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)",
  "Firebase": "![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)",
  "PostgreSQL": "![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)",
  "ML": "![ML](https://img.shields.io/badge/ML-%23039BE5.svg?style=for-the-badge&logo=machine-learning&logoColor=white)",
  "React": "![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)",
  "Redux": "![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)",
  "TypeScript": "![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)",
  "Node.js": "![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)",
  "Vue": "![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)",
  "Jest": "![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)",
  "Jenkins": "![Jenkins](https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white)",
  "C++": "![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white)",
  "SQL": "![SQL](https://img.shields.io/badge/-SQL-%23007ACC?style=for-the-badge&logo=mysql&logoColor=white)",
  "REST APIs": "![REST APIs](https://img.shields.io/badge/REST-APIs-007ACC?style=for-the-badge&logo=rest&logoColor=white)",
  "Tableau": "![Tableau](https://img.shields.io/badge/Tableau-E97627?style=for-the-badge&logo=tableau&logoColor=white)",
  "GraphQL": "![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)",
  "MongoDB": "![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)",
  "Oracle": "![Oracle](https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white)",
  "Bash": "![Bash Script](https://img.shields.io/badge/bash_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white)",
  "Twilio": "![Twilio](https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=Twilio&logoColor=white)",
  "Flask": "![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)"
}

function Badge(props) {
  return (
    SKILL_TO_MARKDOWN_BADGE_MAP[props.text] ? (
      <Markdown className='md-skill-badge'>{SKILL_TO_MARKDOWN_BADGE_MAP[props.text]}</Markdown>
    ) : (
      <div className={`badge ${props.color} ${props.bg} border-${props.color}`}>
        {props.text}
      </div>
    )
  );
}

export default Badge;
