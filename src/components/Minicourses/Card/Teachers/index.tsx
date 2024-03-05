import React from 'react';
import { Avatar } from 'antd';
import { GithubOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

interface Teacher {
    name: string,
    image: string,
    shortDescription: string,
    socialMedia: {
        github: string,
        linkedin: string,
        instagram: string
    }
}

interface SocialMedia {
    github: string,
    linkedin: string,
    instagram: string
}

interface TeacherProps {
    teachers: Teacher[]
}

interface SocialMediaProps {
    socialMedia: SocialMedia
}

const SocialMediaGenerator: React.FC<SocialMediaProps> = ({ socialMedia }: { socialMedia: SocialMedia }) => {
    return (
        <div className="h-12 flex flex-row gap-3">
            {socialMedia.github && (
                <a href={socialMedia.github} target="_blank"
                    style={{ fontSize: "1.6rem" }}>
                    <GithubOutlined />
                </a>
            )}
            {socialMedia.instagram && (
                <a href={socialMedia.instagram} target="_blank"
                    style={{ fontSize: "1.6rem" }}>
                    <InstagramOutlined />
                </a>
            )}
            {socialMedia.linkedin && (
                <a href={socialMedia.linkedin} target="_blank"
                    style={{ fontSize: "1.6rem" }}>
                    <LinkedinOutlined />
                </a>
            )}
            {socialMedia.instagram && (
                <a href={socialMedia.instagram} target="_blank"
                    style={{ fontSize: "1.6rem" }}>
                    <InstagramOutlined />
                </a>
            )}
        </div>
    );
}

const Teachers: React.FC<TeacherProps> = ({ teachers }: { teachers: Teacher[] }) => {

    if (teachers.length === 1) {
        return (
            <div>

            </div>
        );
    } else {
        return (
            <div className="mr-30 flex flex-row gap-8">
                <div className="w-[50%] grid grid-cols-12">
                    <Avatar
                        className="mt-3 col-span-3"
                        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                        icon={<img src={teachers[0].image} alt="Imagem do professor" />}
                    />
                    <div className="col-span-9">
                        <p className="font-semibold text-lg">{teachers[0].name}</p>
                        <p className="mt-1">{teachers[0].shortDescription}</p>
                        <div>
                            <SocialMediaGenerator socialMedia={teachers[0].socialMedia} />
                        </div>
                    </div>
                </div>
                <div className="w-[50%] grid grid-cols-12">
                    <Avatar
                        className="mt-3 col-span-3"
                        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                        icon={<img src={teachers[1].image} alt="Imagem do professor" />}
                    />
                    <div className="col-span-9">
                        <p className="font-semibold text-lg">{teachers[1].name}</p>
                        <p className="mt-1">{teachers[1].shortDescription}</p>
                        <div>
                            <SocialMediaGenerator socialMedia={teachers[1].socialMedia} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Teachers;