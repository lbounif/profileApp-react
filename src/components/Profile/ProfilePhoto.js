import profileImg from '../../assets/ProfileImg.jpg'

const ProfilePhoto = () => {
    return (
        <div>
            <img 
                src={profileImg} 
                alt="profile img" 
                className="profile-photo" />
        </div>
    )
}
export default ProfilePhoto