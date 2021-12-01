import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styled';

const Avatar = () =>{
    const { avatarImage } = useStaticQuery(
        graphql`
        query {
            avatarImage: file(relativePath: { eq: "profile-photo.png"}) {
                childImageSharp {
                    gatsbyImageData(layout:FIXED
                        width:60
                        height:60)   
                }
            }
        }`
    )
    return <S.AvatarWrapper image={avatarImage.childImageSharp.gatsbyImageData}/>
}

export default Avatar;