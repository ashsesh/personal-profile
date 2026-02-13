import { skeleton } from '../../utils';

const AboutCard = ({
  loading,
  about,
}: {
  loading: boolean;
  about: string;
}) => {
  if (!about) return null;

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">About Me</span>
            )}
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          {loading ? (
            <div className="mx-3">
              {skeleton({
                widthCls: 'w-full',
                heightCls: 'h-4',
                className: 'mb-2',
              })}
              {skeleton({
                widthCls: 'w-full',
                heightCls: 'h-4',
                className: 'mb-2',
              })}
              {skeleton({ widthCls: 'w-3/4', heightCls: 'h-4' })}
            </div>
          ) : (
            <div
              className="mx-3 text-sm"
              dangerouslySetInnerHTML={{ __html: about }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
