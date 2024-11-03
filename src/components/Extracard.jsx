import PropTypes from "prop-types";

const rating = new Array(5);
rating.fill({
    icon: 'star',
    style: { FontVariationSettings: '"FILL"1' }
});

const ReviewCard = ({
    content,

}) => {
    return (
        <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[220px] space-y-4"
        >
            <div className="flex items-center gap-1 mb-3">
                {rating.map(({ icon, style }, key) => (
                    <span key={key}
                        className="material-symbols-rounded text-yellow-300 text-[18px]"
                        style={style}
                    >
                        {icon}
                    </span>
                ))}
            </div>

            <p className="text-zinc-400 mb-8">
                {content}
            </p>
            <div className="flex items-center gap-2 mt-auto">

                <div className="">

                    <p className="text-xs text-zinc-400 tracking-wider">

                    </p>
                </div>
            </div>
        </div>
    );
};

ReviewCard.propTypes = {
    content: PropTypes.string.isRequired,

};

export default ReviewCard;
