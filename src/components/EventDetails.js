import React from 'react';
import { useParams, Link } from 'react-router-dom';
import witsPic from '../images/wits.jpg';
import witsPic2 from '../images/event2.jpeg';
import witsPic3 from '../images/event3.jpeg';
import witsPic4 from '../images/event4.jpeg';
import witsPic5 from '../images/event5.jpeg';
import witsPic6 from '../images/event6.jpeg';
import witsPic7 from '../images/event7.jpeg';
import witsPic8 from '../images/event8.jpeg';
import witsPic9 from '../images/event9.jpeg';
import witsPic10 from '../images/event10.jpeg';
import witsPic11 from '../images/event11.jpeg';
import witsPic12 from '../images/event12.jpeg';
import witsPic13 from '../images/event13.jpeg';
import witsPic14 from '../images/event14.jpeg';
import witsPic15 from '../images/event15.jpeg';
import witsPic16 from '../images/event16.jpeg';
import witsPic17 from '../images/event17.jpeg';
import witsPic18 from '../images/event18.jpeg';
import witsPic19 from '../images/event19.jpeg';
import witsPic20 from '../images/event20.jpeg';


const pastEvents = [
  { id: 1, img: witsPic, topic: 'Annual Science Symposium', description: 'This symposium focuses on the latest developments in various scientific fields...', date: '2023-01-20', time: '10:00 AM', location: 'Main Auditorium', lineup: 'Various speakers from leading institutions' },
  { id: 2, img: witsPic2, topic: 'Tech Innovators Conference', description: 'A conference showcasing the latest in tech innovations...', date: '2023-02-15', time: '9:00 AM', location: 'Conference Hall A', lineup: 'Keynote speakers from the tech industry' },
  { id: 3, img: witsPic3, topic: 'Global Health Forum', description: 'Discussions on global health challenges and solutions...', date: '2023-03-10', time: '11:00 AM', location: 'Health Sciences Building', lineup: 'Panelists from WHO and CDC' },
  { id: 4, img: witsPic4, topic: 'Art & Design Expo', description: 'Showcasing contemporary art and design...', date: '2023-04-05', time: '1:00 PM', location: 'Art Gallery', lineup: 'Renowned artists and designers' },
  { id: 5, img: witsPic5, topic: 'Environmental Sustainability Summit', description: 'Focus on sustainable practices and innovations...', date: '2023-05-12', time: '10:00 AM', location: 'Green Hall', lineup: 'Speakers from Greenpeace and WWF' },
  { id: 6, img: witsPic6, topic: 'Literature & Poetry Festival', description: 'Celebrating literature and poetry from around the world...', date: '2023-06-22', time: '2:00 PM', location: 'Library Auditorium', lineup: 'Famous authors and poets' },
  { id: 7, img: witsPic7, topic: 'Business Leadership Conference', description: 'Insights into effective leadership in business...', date: '2023-07-18', time: '9:30 AM', location: 'Conference Hall B', lineup: 'CEOs and industry leaders' },
  { id: 8, img: witsPic8, topic: 'Innovative Agriculture Symposium', description: 'Exploring innovations in agriculture and food security...', date: '2023-08-09', time: '11:30 AM', location: 'Agriculture Building', lineup: 'Experts from FAO and agritech companies' },
  { id: 9, img: witsPic9, topic: 'Digital Marketing Workshop', description: 'Strategies for successful digital marketing campaigns...', date: '2023-09-05', time: '10:00 AM', location: 'Business School', lineup: 'Marketing professionals and strategists' },
  { id: 10, img: witsPic10, topic: 'Cybersecurity Forum', description: 'Addressing cybersecurity threats and solutions...', date: '2023-10-15', time: '12:00 PM', location: 'Tech Center', lineup: 'Cybersecurity experts and analysts' },
  { id: 11, img: witsPic11, topic: 'AI & Machine Learning Conference', description: 'Exploring the impact of AI and ML in various sectors...', date: '2023-11-02', time: '9:00 AM', location: 'Innovation Hub', lineup: 'Leading AI researchers and developers' },
  { id: 12, img: witsPic12, topic: 'Renewable Energy Expo', description: 'Showcasing advancements in renewable energy...', date: '2023-12-07', time: '10:30 AM', location: 'Energy Center', lineup: 'Speakers from top energy companies' },
  { id: 13, img: witsPic13, topic: 'Cultural Heritage Festival', description: 'Celebrating diverse cultural heritage...', date: '2024-01-15', time: '3:00 PM', location: 'Cultural Hall', lineup: 'Performances and exhibitions' },
  { id: 14, img: witsPic14, topic: 'Sports Science Seminar', description: 'Advancements in sports science and technology...', date: '2024-02-18', time: '10:00 AM', location: 'Sports Complex', lineup: 'Experts from sports medicine' },
  { id: 15, img: witsPic15, topic: 'Urban Planning Symposium', description: 'Discussions on modern urban planning...', date: '2024-03-25', time: '11:00 AM', location: 'Architecture Building', lineup: 'Urban planners and architects' },
  { id: 16, img: witsPic16, topic: 'Space Exploration Forum', description: 'The future of space exploration and technology...', date: '2024-04-30', time: '1:00 PM', location: 'Science Center', lineup: 'NASA and SpaceX representatives' },
  { id: 17, img: witsPic17, topic: 'Music & Technology Conference', description: 'The intersection of music and technology...', date: '2024-05-20', time: '10:00 AM', location: 'Music Hall', lineup: 'Musicians and tech innovators' },
  { id: 18, img: witsPic18, topic: 'Financial Markets Seminar', description: 'Insights into global financial markets...', date: '2024-06-10', time: '9:00 AM', location: 'Economics Building', lineup: 'Economists and market analysts' },
  { id: 19, img: witsPic19, topic: 'Human Rights Conference', description: 'Global human rights challenges and solutions...', date: '2024-07-15', time: '11:00 AM', location: 'Law School Auditorium', lineup: 'Human rights activists and lawyers' },
  { id: 20, img: witsPic20, topic: 'Climate Change Workshop', description: 'Practical solutions for climate change...', date: '2024-08-25', time: '10:00 AM', location: 'Environmental Sciences Building', lineup: 'Climate scientists and policy makers' }
];

const EventDetails = () => {
    const { id } = useParams();
    const event = pastEvents.find(event => event.id === parseInt(id));

    return (
        <div className="event-details-page">
            {event ? (
                <div className="event-details-card">
                    <img className="event-image" src={event.img} alt={event.topic} />
                    <div className="event-details-content">
                        <h1>{event.topic}</h1>
                        <p>{event.description}</p>
                        <p><strong>Date:</strong> {event.date}</p>
                        <p><strong>Time:</strong> {event.time}</p>
                        <p><strong>Location:</strong> {event.location}</p>
                        <p><strong>Lineup:</strong> {event.lineup}</p>
                        <Link to="/home" className="back-home-button">Back to Home</Link>
                    </div>
                </div>
            ) : (
                <p>Event not found</p>
            )}
        </div>
    );
};

export default EventDetails;
