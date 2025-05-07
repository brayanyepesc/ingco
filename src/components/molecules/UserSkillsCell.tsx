import { Row } from "@tanstack/react-table";
import { Badge } from "../ui/badge";
import { User } from "@/types/general.types";

export const UserSkillsCell = ({ row }: { row: Row<User> }) => {
  const skills = row.getValue("skills") as string[];
  return (
    <div className="flex flex-wrap gap-1">
      {skills && skills.length > 0
        ? skills.slice(0, 2).map((skill, index) => (
            <Badge key={index} variant="outline" className="bg-tertiary/10">
              {skill}
            </Badge>
          ))
        : "N/A"}
      {skills && skills.length > 2 && (
        <Badge variant="outline" className="bg-tertiary/10">
          +{skills.length - 2}
        </Badge>
      )}
    </div>
  );
};
