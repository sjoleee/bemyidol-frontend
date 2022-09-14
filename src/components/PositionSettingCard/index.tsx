import { H3, H4 } from '../Text';

const PositionSettingCard = () => {
  return (
    <div className="flex w-full">
      <img
        className="w-1/5 h-1/5"
        src="https://w.namu.la/s/3e1ac4e63718b63273d30d1142bf7f3fcb368e3d37a76556a1cd6cb8b0225d5bbda3e14a7379ea73160363e824c6aa497cc67cbaf096e7607fb8f776800a0b3812125ff0fa1872c991de98170d8b5964bdfd35725e5520d16b2f4c451c241715"
      />
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <H3>수지</H3>
          <div>
            <input type="checkbox" id="leader"></input>
            <label htmlFor="leader">리더</label>
          </div>
        </div>
        <H4>미쓰에이</H4>
        <select>
          <option value="메인보컬">메인보컬</option>
        </select>
      </div>
    </div>
  );
};

export default PositionSettingCard;
