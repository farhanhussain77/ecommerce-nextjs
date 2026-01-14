interface ILike {
    isLiked?: boolean;
}

const LikeIcon = ({isLiked}: ILike) => {
    return (
        <>
            {isLiked ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    fill="none"
                >
                    <path
                    fill="red"
                    stroke="red"
                    strokeWidth={1.4}
                    d="m5.934 18.544 9.381 8.813c.325.305.487.457.685.457.198 0 .36-.152.685-.457l9.38-8.813a6.938 6.938 0 0 0 .732-9.31l-.413-.531c-2.624-3.382-7.891-2.815-9.735 1.048a.719.719 0 0 1-1.298 0c-1.844-3.863-7.111-4.43-9.736-1.048l-.412.532a6.938 6.938 0 0 0 .731 9.31Z"
                    />
                </svg>
            ):(
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                    fill="none"
                >
                    <path
                        stroke="#919191"
                        strokeOpacity={0.77}
                        strokeWidth={1.4}
                        d="m5.934 18.544 9.381 8.813c.325.305.487.457.685.457.198 0 .36-.152.685-.457l9.38-8.813a6.938 6.938 0 0 0 .732-9.31l-.413-.53C23.76 5.32 18.493 5.887 16.65 9.751a.719.719 0 0 1-1.298 0C13.507 5.888 8.24 5.32 5.615 8.703l-.412.532a6.938 6.938 0 0 0 .731 9.31Z"
                    />
                </svg>
            )}
        </>
    )
}

export default LikeIcon