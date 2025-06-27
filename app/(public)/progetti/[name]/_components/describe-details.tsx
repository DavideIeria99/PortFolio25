import { Database } from "@/database.types";
import React from "react";
import SectionDescribe from "./section-describe";

interface describeProps {
    describe: Database["public"]["Tables"]["describe"]["Row"][] | null;
}

export default function DescribeDetails({ describe }: describeProps) {
    return (
        <article className="px-3">
            {describe &&
                describe.map((el) => {
                    if (el.id % 2 === 0) {
                        return <SectionDescribe key={el.id} describe={el} />;
                    } else {
                        return (
                            <SectionDescribe
                                key={el.id}
                                describe={el}
                                reverse
                            />
                        );
                    }
                })}
        </article>
    );
}
