import prisma from "@/lib/prisma";

const StudentAttendaceCard = async ({id}:{id: string}) => {
    const attendance = await prisma.attendance.findMany({
        where: {
            studentId: id,
            date: {
                gte: new Date(new Date().getFullYear(), 0,1),
            },
        },
    });

    const totalDay = attendance.length;
    const presentDays = attendance.filter((day) => day.present).length;
    const precntage = (presentDays / totalDay) *100;

    return (
        <div className="">
            <h1 className="text-xl font-semibold">{precntage}</h1>
            <span className="text-sm text-gray-400">Attendance</span>
        </div>
    )
}

export default StudentAttendaceCard;