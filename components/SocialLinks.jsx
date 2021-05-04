import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import InstagramIcon from '@material-ui/icons/Instagram';

const SocialLinks = () => {
    return (
        <div class="flex space-x-4">
            <a href="https://github.com/MuradBuyukasik"><GitHubIcon style={{color: '#fff'}}/></a>
            <a href="https://instagram.com/muradbuyukasik"><InstagramIcon style={{color: '#fff'}}/></a>
        </div>
    )
}

export default SocialLinks
