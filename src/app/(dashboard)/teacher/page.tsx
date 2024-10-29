import Announcements from "@/components/Announcements";
import BigCalandarContainer from "@/components/BigCalandarContainer";
import { getAuthDetails } from "@/lib/utils";

const TeacherPage = async () => {
  const { userId } = await getAuthDetails();
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3 ">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-lg font-semibold">Schedule</h1>
          <BigCalandarContainer type="teacherId" id={userId!} />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        {/* <EventCalender /> */}
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;
