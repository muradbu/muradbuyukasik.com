import React from 'react'
import styles from './SocialLinks.module.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube'

const SocialLinks = () => {
    return (
        <div className={styles['social-links']}>
            <a href="https://github.com/MuradBuyukasik"><GitHubIcon style={{ color: '#fff' }} /></a>
            <a href="https://instagram.com/muradbuyukasik"><InstagramIcon style={{ color: '#fff' }} /></a>
            <a href="https://www.youtube.com/channel/UC5NC9KmhbG7r5dzPOBP9QMQ"><YouTubeIcon style={{ color: '#fff' }} /></a>
        </div>
    )
}

export default SocialLinks