import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
export function Cards({
  courseImage,
  altCourseImage,
  title,
  description,
  tutorImage,
  tutorAlt,
  tutorName,
  tutorPosition,
  tutorCompany,
  rating,
  reviewCount,
  price,
}: {
  courseImage: string;
  altCourseImage: string;
  title: string;
  description: string;
  tutorImage: string;
  tutorAlt: string;
  tutorName: string;
  tutorPosition: string;
  tutorCompany: string;
  rating: number;
  reviewCount: number;
  price: number;
}) {
  function formatPrice(price: number) {
    return price >= 1000 ? price / 1000 + "K" : price.toString();
  }
  return (
    <div className="flex h-auto max-h-[147px] w-[320px] flex-col gap-[8px] rounded-[10px] border-[1px] border-border bg-primary-background p-[16px] lg:max-h-[426px] lg:w-[384px] lg:gap-[16px] lg:p-[20px]">
      <div className="flex w-full max-w-[288px] flex-row gap-[12px] lg:max-w-[344px] lg:flex-col lg:gap-[16px]">
        <img
          src={courseImage}
          alt={altCourseImage}
          className="h-[82px] w-[82px] rounded-[10px] object-cover lg:h-[193px] lg:w-[344px]"
        />
        <div className="flex flex-col justify-between gap-[8px] lg:gap-[16px]">
          <div className="flex h-auto w-full flex-col lg:max-h-[74px] lg:max-w-[344px] lg:gap-[8px]">
            <h6 className="text-heading-6-mobile font-heading-6 text-dark-primary lg:text-heading-6">
              {title}
            </h6>
            <p className="line-clamp-2 hidden h-full text-ellipsis font-medium-medium text-dark-secondary lg:block lg:max-h-[44px] lg:text-body-medium">
              {description}
            </p>
          </div>
          <div className="flex h-auto w-full gap-[8px] lg:max-h-[42px] lg:max-w-[344px] lg:gap-[10px]">
            <img
              src={tutorImage}
              alt={tutorAlt}
              className="h-[36px] w-[36px] rounded-[10px] lg:h-[40px] lg:w-[40px]"
            />
            <div className="flex h-auto max-h-[37px] w-full max-w-[150px] flex-col lg:max-h-[42px] lg:max-w-[294px]">
              <p className="text-body-medium-mobile font-medium-medium tracking-medium text-dark-primary lg:text-body-medium">
                {tutorName}
              </p>
              <p className="text-body-small-mobile font-small-regular tracking-small text-dark-secondary lg:text-body-small">
                {tutorPosition} <span className="hidden lg:inline">di </span>
                <span className="hidden font-medium-bold lg:inline">
                  {tutorCompany}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-auto w-full items-center justify-between lg:max-h-[29px] lg:max-w-[344px]">
        <div className="flex h-auto w-auto items-center gap-[8px] lg:max-h-[20px] lg:max-w-[151px]">
          <Rating
            name="raing-stars"
            value={rating}
            precision={0.5}
            size="small"
            readOnly
            emptyIcon={
              <StarIcon style={{ color: "#3A35411F" }} fontSize="inherit" />
            }
            sx={{
              "& .MuiRating-iconFilled": {
                color: "#FCE91B",
              },
              "& .MuiRating-iconEmpty": {
                color: "#3A35411F",
              },
            }}
          />
          <p className="text-nowrap text-body-small-mobile tracking-small text-dark-secondary underline lg:text-body-small">
            {rating + " " + `(${reviewCount})`}
          </p>
        </div>
        <h4 className="text-heading-5 font-heading-4 text-primary-default lg:text-heading-4">
          {"Rp " + formatPrice(price)}
        </h4>
      </div>
    </div>
  );
}
