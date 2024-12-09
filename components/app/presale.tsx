export default function () {
    return <>
        <div className="pt-2">
            <span className="text-red-600 font-black">售前须知:</span> 请详细说明数据需求,要什么地区,什么时间分辩率,什么要素,
            什么时间段,要站点观洪数据还是网格数据,购买预算是多少。
        </div>
        <div className="pt-2">
            <span className="text-red-600 font-black">时间分辩率有:</span> 逐小时、日、月、年
        </div>

        <div className="pt-2">
            <span className="text-red-600 font-black">站点信息:</span> 中国地面国家站+自动气象站(近7万站点)
        </div>
        <div className="pt-2">
            <span className="text-red-600 font-black">站点观洪要素:</span> 降水、气温、最高温度、最低温度、相对湿度、风速、风向、
            能见度、云高、露点温度、气压、海平面气压,土壤水分
        </div>
        <div className="pt-2">
            <span className="text-red-600 font-black">站点数据年份:</span> 08年~实时更新(更多年份请详细咨询)
        </div>
        <div className="pt-2">
            <span className="text-red-600 font-black">网格数据要素:</span> 风速、气温、降水、太阳辐射、气压、土壤温度、土壤湿度、
            地表温度、相对湿度
        </div>
        <div className="pt-2">
            <span className="text-red-600 font-black">网格数据年份:</span> 98年-23年(更多年份请详细咨询)
        </div>
        <div className="pt-2">
            <span className="text-red-600 font-black">网格数据:</span>以卫星数据作为背景场,将观测站点的数据融合进去,可弩补站点
            数据在萨个时刻罂测的问题。(分辩率6km,霁要更高精度请详细咨询)
            如:我需要北京地区2010-2020年逐小时降雨、气温、风速站点(国家站+自动
            站)数据,预算1000。
        </div>
        <div className="pt-2">
            亦可根据你提供的站点信息或者经纬度信息给你提取
        </div>
        <div className="pt-2">
            其他情况请详细咨询<br />
            <span className="text-red-600 font-black">Ps:请详细说明数据需求</span>
        </div>
    </>
}