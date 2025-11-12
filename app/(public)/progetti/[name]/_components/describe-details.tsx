
import React from "react";
import SectionDescribe from "./section-describe";
import { ProjectItem } from "@/utils/sanity/types";

interface describeProps {
    describe: ProjectItem[] | null;
}

export default function DescribeDetails({ describe }: describeProps) {
    return (
        <section className="px-3">
            {describe &&
                describe.map((el,idx) => {
                    if (idx% 2 === 0) {
                        return <SectionDescribe key={idx} describe={el} />;
                    } else {
                        return (
                            <SectionDescribe
                                key={idx}
                                describe={el}
                                reverse
                            />
                        );
                    }
                })}
        </section>
    );
}
