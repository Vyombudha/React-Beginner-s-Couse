export interface AvatarProps {
    userName: string;
}

export default function Avatar({ userName }: AvatarProps) {
    const avatarUrl =
        `https://api.dicebear.com/10.x/lorelei/svg?seed=${encodeURIComponent(userName)}`;

    return (
        <img
            src={avatarUrl}
            alt={`${userName}'s avatar`}
            width={100}
            height={100}
        />
    );
}

