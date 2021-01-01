import React from 'react';
import '../App.css';
import './Blog.css';

import BANs1 from '../images/BANs1.jpg';
import BANs3 from '../images/BANs3.PNG';
import BANs2 from '../images/BANs2.PNG';
import BANs4 from '../images/BANs4.PNG';
import BANs5 from '../images/BANs5.PNG';
import BANs6 from '../images/BANs6.PNG';
import BANs7 from '../images/BANs7.jpg';
import BANs8 from '../images/BANs8.png';

function Blog1() {
  return (
    <div className="content">
        <br></br>
        <div className="container">
            <h3 className="title">Structure and Applications of Body Area Networks</h3>
            <div className="img">
                <img src={BANs1} alt="Body Area Networks"/> 
            </div>
            <p>Body area networks connect people to a network via electronic devices either connected to or implanted in their body. Using physical properties of humans, such as their high water content, signals can be sent through the nervous system and skin to a device that transmits data across the network. There are several characteristics to consider when designing this network in order to maintain the safety of both the human and the data being transmitted. The components of the system are relatively cheap and energy efficient, making them convenient for users without overloading the network. Ultimately, body area networks can be useful in various fields, including healthcare and security, to create a healthier, safer society.</p>
            <div className="img">
                <img src={BANs3} alt="Applications of Body Area Networks" width="500px"/>
                <p className="img-caption">Applications of Body Area Networks, <i>ElProCus</i></p> 
            </div>
            <p>To begin with, a body area network (BAN) is a system of sensor nodes and devices connected by a network used for processing and communicating sensitive and urgent information. Body area networks consist of sensor nodes, such as microchips, connected to the human body, either externally as a wearable device or internally as an implant. The devices can act as unique identifiers for each person as well as monitor important changes in body composition, such as blood pressure, temperature, heart rate, EEG, and glucose levels for medical purposes. When significant bodily changes are detected, the electrical signals produced by the body are converted to bits by a transducer, a mechanism that converts one form of energy (electrical, thermal, kinetic, magnetic) into another. The bits are then sent to a base station and over to a gateway node called a Personal Digital Assistant (PDA), which acts as both storage unit for data and a connection to the BAN. The information is then sent to the appropriate receiving party either on a WLAN or wirelessly using time-division multiple access (TDMA).</p>
            <div className="img">
                <img src={BANs2} alt="Components of Body Area Networks" width="350px"/>
                <p className="img-caption">Components of Body Area Networks, <i>ElProCus</i></p> 
            </div>
            <p>Similar in function to a MAC address, a unique identifier called a Human Body Identification Code (HBIC) is assigned to each device and added to the packet header as the data traverses through the layers of the internet. This address could be derived from anything that distinctly identifies a specific person, including a fingerprint, gene sequence, or iris. A new MAC protocol called BodyMAC has been proposed to improve energy efficiency. This protocol incorporates features such as flexible bandwidth, reduced packet collision, faster transmission rates, and a Sleep Mode, which helps decrease network transmission traffic when the device is idle. The BodyMAC frame consists of three parts: Beacon, Downlink, and Uplink. The Beacon contains a description of the structure of the MAC frame, such as the number of slots for downlink and uplink, and any information that needs to be transmitted to all nodes (via broadcast). The Downlink part handles transmission from gateway to nodes, either by casting to one node specifically or all nodes by broadcasting. The Uplink part is broken down into two: Contention Access Part (CAP) and Contention Free Part (CFP). CAP utilizes Carrier-Sense Multiple Access (CSMA) in which all nodes fight for access to the link for transmission. In contrast, transmission slots are handled by the gateway in CFP and each node is given a Granted Time Slot (GTS) to transmit without collisions. To reduce congestion, both the Downlink and Uplink durations are modified to suit the current network traffic.</p>
            <div className="img">
                <img src={BANs4} alt="BodyMAC Frame Structure" width="500px"/>
                <p className="img-caption">BodyMAC Frame Structure, <i>G. Fang and E. Dutkiewicz</i></p> 
            </div>
            <p>With varying levels of urgency of data transmission, resource allocation can change to fit the current circumstances. BANs include three types of resource allocation mechanisms: Burst Bandwidth, Periodic Bandwidth, and Adjust Bandwidth. Burst Bandwidth is for transmitting high urgency information lasting only a few MAC frames. A field for initial BURST-LENGTH is included in the MAC header and is decreased by 50% in the subsequent frame if that bandwidth limit is not reached. Periodic Bandwidth provides a node with sole access of the channel for a period of a few MAC frames. The nodes themselves decide how to use this bandwidth, and the bandwidth can be recycled if a node decides to remove itself from the network temporarily. Adjust Bandwidth determines, based on the previous frame, how much more or less bandwidth to include for the next frame. This promotes efficiency by allowing for flexible bandwidth to fit each node’s current needs.</p>
            <p>To further promote energy efficiency, nodes on the BANs can go into Sleep Mode when they are not transmitting. First, a node must send a Sleep Mode request to the gateway, including information such as the starting frame number and the duration of the sleep (in frames). The gateway then sends an ACK letting the node know if the request has been successfully received. The gateway decides whether to grant the sleep request based on the parameters passed and whether the gateway has information it needs to send to the node immediately. While in Sleep Mode, a node can still transmit if it has a GTS. This is a good time for nodes to synchronize with the gateway by adjusting their time to the information in the ACK received from the gateway after the node sends a data packet.</p>
            <div className="img">
                <img src={BANs8} alt="Sleep Mode" width="250px"/>
                <p className="img-caption"></p> 
            </div>
            <p>Due to the nature of BANs, there are some specific characteristics that must be kept in mind when designing the networks to ensure the safety of both the human and the data being transmitted. First of all, since the batteries for the device must be small enough to fit in a human and they are not easily replaceable since that may require surgery, the batteries must be very efficient to promote durability and longevity. Furthermore, since the range of devices in a BAN is short (only a few meters) and there are not many nodes on the network (under a few hundred),  a star topology is commonly used for the network. An advantage of the star topology is that it allows for better synchronization between the gateway and the nodes. Moreover, an important aspect to keep in mind when designing BANs is that they will need to be able to support mobile devices since people are free to move around. Additionally, BANs can serve a variety of applications, from simple data transfers with lenient time limits to urgent medical information that must be transmitted in real-time. As a result, the network is built for flexible uplink and downlink bandwidth and includes a Sleep Mode to improve energy efficiency. Some devices on the network operate using TCP while others, such as those for medical devices, need to use UDP due to the urgency of data retrieval for emergency situations; there cannot be time wasted with congestion control overhead. Moreover, one concern with BANs is that physical characteristics, such as one’s height and weight, one’s fat content, and the location of the device within the body, can affect the propagation speed of signals or distort the signals through absorption.</p>
            <div className="img">
                <img src={BANs5} alt="Concept of a Body Area Network" width="550px"/>
                <p className="img-caption">Concept of a Body Area Network, <i>Renesas</i></p> 
            </div>
            <p>There are a variety of applications for this technology, the main one being healthcare. First of all, BANs can allow doctors to monitor patients’ physical health and make necessary adjustments to their treatment remotely without needing to directly meet with the patient. For instance, if a patient’s pacemaker is malfunctioning or detecting that the patient is having heart issues, an emergency signal can be sent through the BAN to the doctor to alert them of the issue and prompt action. This saves patients time and money because they will not need to travel to the doctor for an appointment. Additionally, BANs are useful for early-detection of diseases. For example, a device connected to one’s body can track physical features of one’s health, such as heart rate and blood pressure, to determine if there is an abnormality so that one can seek medical attention before the symptoms progress.</p>
            <div className="img">
                <img src={BANs6} alt="BANs Connect to Healthcare Providers" width="550px"/>
                <p className="img-caption">BANs Connect to Healthcare Providers, <i>B. Gyselinckx, et al</i></p> 
            </div>
            <p>Furthermore, BANs can be used to promote better data privacy and security practices. 
            Since the devices in a BAN have uniques identifiers (HBIC) specific to one’s body, everyone can be uniquely identified and there is no need for less secure means of authentication such as passwords and fingerprints. People can simply authenticate by placing a body part on a scanner which reads the appropriate information from the person’s device. It becomes harder for hackers to steal someone’s identity and gain access to secure data. HBICs can be used as a sort of ID card, containing personal information about each individual, including one’s name, address, phone number, blood type, and bank account information. Being able to definitively identify individuals would help decrease unauthorized access to sensitive information and protect people’s privacy. Likewise, storing all this information literally on one’s person would eliminate the need to carry around ID cards, which could be lost or stolen, resulting in identity theft.</p>
            <div className="img">
                <img src={BANs7} alt="BANs Provide Privacy and Security" width="550px"/>
                <p className="img-caption">BANs Provide Privacy and Security</p> 
            </div>
            <p>Overall, BANs are the network of the future. They are both energy and cost efficient and have a variety of uses that can benefit society greatly. For instance, having the ability to monitor people’s health in real time can allow for easy flexibility in one’s medical treatments and help detect potentially fatal diseases earlier. Also, with the rapid growth of big data, it is hard for network security to keep up. But, incorporating BANs will allow everyone to definitively identify each other and prevent unauthorized access to private data. While there are still some flaws with BANs, their structure and applications make them highly desirable for further research and widespread implementation.</p>
            <p className="works-cited"><b>Works Cited</b></p>
            <p className="reference">
            A. F. A. Rahman, R. Ahmad and S. N. Ramli, "Forensics readiness for Wireless Body Area 
            Network (WBAN) system," <i>16th International Conference on Advanced Communication Technology</i>, Pyeongchang, 2014, pp. 177-180. doi: 10.1109/ICACT.2014.6778944 <a href='https://ieeexplore.ieee.org/document/6778944' target="_blank" rel="noopener noreferrer">https://ieeexplore.ieee.org/document/6778944</a> </p>
            <p className="reference">
            A. F. Jaimes and F. R. de Sousa, "A taxonomy for learning, teaching, and assessing wireless body 
            area networks," <i>2016 IEEE 7th Latin American Symposium on Circuits & Systems (LASCAS)</i>, Florianopolis, 2016, pp. 179-182. doi: 10.1109/LASCAS.2016.7451039 <a href='https://ieeexplore.ieee.org/document/7451039' target="_blank" rel="noopener noreferrer">https://ieeexplore.ieee.org/document/7451039</a></p>
            <p className="reference">
            Agarwal, Tarun, and Hi Sooraj. “Sensor Network – Know All about BAN Body Area Network.” 
            <i>ElProCus</i>, ElProCus, 11 Nov. 2019, <a href='https://www.elprocus.com/ban-body-area-network/' target="_blank" rel="noopener noreferrer">www.elprocus.com/ban-body-area-network/.</a></p>
            <p className="reference">
            B. Gyselinckx, C. Van Hoof, J. Ryckaert, R. F. Yazicioglu, P. Fiorini and V. Leonov, "Human++: 
            autonomous wireless sensors for body area networks," <i>Proceedings of the IEEE 2005 Custom Integrated Circuits Conference, 2005</i>., San Jose, CA, 2005, pp. 13-19. doi: 10.1109/CICC.2005.1568597 <a href='https://ieeexplore.ieee.org/document/1568597' target="_blank" rel="noopener noreferrer">https://ieeexplore.ieee.org/document/1568597</a></p>
            <p className="reference">
            “Body Area Networks: The Smart Society Gets Personal.” Renesas Electronics, <i>Renesas 
            Electronics Corporation</i>, 2019, <a href='https://www.renesas.com/in/en/about/edge-magazine/solution/08-body-area-networks.html' target="_blank" rel="noopener noreferrer">www.renesas.com/in/en/about/edge-magazine/solution/08-body-area-networks.html.</a></p>
            <p className="reference">
            F. Di Franco et al., "The effect of body shape and gender on wireless Body Area Network 
            on-body channels," <i>IEEE Middle East Conference on Antennas and Propagation (MECAP 2010)</i>, Cairo, 2010, pp. 1-3. doi: 10.1109/MECAP.2010.5724195 <a href='https://ieeexplore.ieee.org/document/5724195' target="_blank" rel="noopener noreferrer">https://ieeexplore.ieee.org/document/5724195</a></p>
            <p className="reference">
            G. Fang and E. Dutkiewicz, "BodyMAC: Energy efficient TDMA-based MAC protocol for 
            Wireless Body Area Networks," <i>2009 9th International Symposium on Communications and Information Technology</i>, Icheon, 2009, pp. 1455-1459. doi: 10.1109/ISCIT.2009.5341045 <a href='https://ieeexplore.ieee.org/document/5341045' target="_blank" rel="noopener noreferrer">https://ieeexplore.ieee.org/document/5341045</a></p>
            <p className="reference">
            Karulf, Erik. “Body Area Networks (BAN) .” <i>McKelvey School of Engineering: Computer 
            Science & Engineering</i>, Washington University in St. Louis, 23 Apr. 2008, <a href='https://www.cse.wustl.edu/~jain/cse574-08/ftp/ban/index.html' target="_blank" rel="noopener noreferrer">www.cse.wustl.edu/~jain/cse574-08/ftp/ban/index.html.</a></p>
            <p className="reference">
            Purdue University. “Discovery Clears Way for Human Body to Work as Robust Communication 
            Network for Electronic Devices.” <i>Phys.org</i>, Purdue University, 14 Dec. 2017, <a href='https://phys.org/news/2017-12-discovery-human-body-robust-network.html' target="_blank" rel="noopener noreferrer">phys.org/news/2017-12-discovery-human-body-robust-network.html.</a></p>
            <p className="reference">
            S. Dharshini and M. M. Subashini, "An overview on wireless body area networks," <i>2017 
            Innovations in Power and Advanced Computing Technologies (i-PACT)</i>, Vellore, 2017, pp. 1-10. doi: 10.1109/IPACT.2017.8244985 <a href='https://ieeexplore.ieee.org/document/8244985' target="_blank" rel="noopener noreferrer">https://ieeexplore.ieee.org/document/8244985</a></p>
            <p className="reference">
            Z. Wu, D. Xiao, X. Peng, H. Xu and X. Zhuang, "Human Body Network: Network in the 
            Future?," <i>2008 IEEE International Symposium on Knowledge Acquisition and Modeling Workshop</i>, Wuhan, 2008, pp. 578-581. doi: 10.1109/KAMW.2008.4810554 <a href='https://ieeexplore.ieee.org/document/4810554' target="_blank" rel="noopener noreferrer">https://ieeexplore.ieee.org/document/4810554</a></p>
        </div>
    </div>
  );
}

export default Blog1;
