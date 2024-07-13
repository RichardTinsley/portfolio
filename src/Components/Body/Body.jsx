import "./Body.css"

export default function Body() {

    return (
    <div className="body">
        {/* <h3>
        Hello, my name is Richard Tinsley, I am a Software / Web Developer with over 10 years of experience.
        </h3> */}

        <div className="card">
            <div className="card-title"> Software Development </div>
            <div className="card-body">
                <ul>
                    <li>Python</li>
                    <li>C & C++</li>
                    <li>C# & Java</li>
                    <li>PHP</li>
                    <li>Ruby</li>
                    <li>LUA</li>
                    <li>Plus a wide range of Frameworks & Libraries</li>
                </ul>
            </div>
        </div>
        
        <div className="card">
            <div className="card-title"> Web Development </div>
            <div className="card-body">
                <ul>
                    <li>HTML</li>
                    <li>CSS & SASS</li>
                    <li>Javascript & Typescript</li>
                    <li>React & Vue</li>
                    <li>Express & Flask</li>
                </ul>
            </div>
        </div>

        <div className="card">
            <div className="card-title"> Qualifications </div>
            <div className="card-body">
                <ul>
                    <li>2020 - 2024: Bachelor of Information Technology - Majoring in Computer Science - GPA 6.2</li>
                    <li>2018 - 2019: Certificate III in Business Administration - BSB30415_20170101</li>
                    <li>2016 - 2018: Diploma in Information Technology - Systems Administration</li>
                    <li>2017: Certificate II in Business - ESA2-BSB20115</li>
                    <li>2011: Certificate III in Graphic Design - South Bank TAFE</li>
                    <li>2006: Certificate III in Information Technology - Software Applications - Axiom College</li>
                </ul> 
            </div>
        </div>

        <div className="card">
            <div className="card-title"> Database Management </div>
            <div className="card-body">
                <ul>
                    <li>PostGres</li>
                    <li>MySQL</li>
                    <li>MariaDB & MongoDB</li>
                </ul>
            </div>
        </div>

        <div className="card">
            <div className="card-title"> Other Skills </div>
            <div className="card-body">
                <ul>
                    <li>Adobe Creative Cloud</li>
                    <li>Blender</li>
                    <li>Unreal & Unity</li>
                    <li>GIT & CICD Pipelines</li>
                    <li>Docker & Kubernetes</li>
                    <li>UI & UX Design Principles</li>
                    <li>Agile Project Management</li>
                </ul>
            </div>
        </div>
    </div>
    )
}


