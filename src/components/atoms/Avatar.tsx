interface AvatarProps {
    src: string;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
    return (
        <div className="w-full aspect-w-1 aspect-h-1">
            <img src={src} alt="avatar" className="w-full h-full rounded-full object-cover object-top" />
        </div>
    )
}

export default Avatar;