import React from 'react'
import styles from './SocialLinks.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

const SocialLinks = () => {
    const iconSize = "lg"

    return (
        <div className={styles['social-links']}>
            <a href="https://github.com/MuradBuyukasik"><FontAwesomeIcon icon={faGithub} size={iconSize} /></a>
            <a href="https://instagram.com/muradbuyukasik"><FontAwesomeIcon icon={faInstagram} size={iconSize} /></a>
            <a href="https://www.youtube.com/channel/UC5NC9KmhbG7r5dzPOBP9QMQ"><FontAwesomeIcon icon={faYoutube} size={iconSize} /></a>
        </div>
    )
}

export default SocialLinks
